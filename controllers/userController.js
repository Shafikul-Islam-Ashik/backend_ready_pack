import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

import User from "../models/User.js";

import { fileDeleteFromCloud, fileUploadToCloud } from "../utils/cloudinary.js";
import {
  getPublicId,
  isValidEmail,
  isValidMobile,
} from "../helpers/helpers.js";

/**
 * @description Get all user
 * @method GET
 * @route /api/v1/user/
 * @access public
 */
export const getAllUser = asyncHandler(async (req, res) => {
  // get all user
  const users = await User.find();

  // check user data
  if (users.length === 0) {
    return res.status(404).json({ message: "Users data not found" });
  }

  res
    .status(200)
    .json({ message: "Users data loaded", dataCount: users.length, users });
});

/**
 * @description Get single user
 * @method GET
 * @route /api/v1/user/:id
 * @access public
 */
export const getSingleUser = asyncHandler(async (req, res) => {
  // get user id
  const { id } = req.params;

  // get user data from db
  const user = await User.findById(id);

  // check user
  if (!user) {
    return res.status(404).json({ message: "User data not found" });
  }

  // response
  res.status(200).json(user);
});

/**
 * @description Create new user
 * @method POST
 * @route /api/v1/user/
 * @access public
 */
export const createUser = asyncHandler(async (req, res) => {
  // get form data
  const { name, email, phone, password } = req.body;

  // validation
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check valid email
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // check valid phone number
  if (!isValidMobile(phone)) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  // check email existance
  const checkEmail = await User.findOne({ email: email });
  if (checkEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // check phone existance
  const checkPhone = await User.findOne({ phone });
  if (checkPhone) {
    return res.status(400).json({ message: "Phone number already exists" });
  }

  // check file
  let fileData = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);

    fileData = data.secure_url;
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 10);

  // create user
  const user = await User.create({
    name,
    email,
    phone,
    password: hashPassword,
    photo: fileData,
  });

  // response
  res.status(201).json({ message: "User data created successful", user });
});

/**
 * @description delete user
 * @method DELETE
 * @route /api/v1/user/:id
 * @access public
 */
export const deleteUser = asyncHandler(async (req, res) => {
  // get user id
  const { id } = req.params;

  // delete user data from db
  const user = await User.findByIdAndDelete(id);

  // delete cloud file
  await fileDeleteFromCloud(getPublicId(user.photo));

  // console.log(user.photo);
  // console.log(getPublicId(user.photo));

  // response
  res.status(200).json({ message: "User deleted successful", user });
});

/**
 * @description update user
 * @method PUT/PATCH
 * @route /api/v1/user/:id
 * @access public
 */
export const updateUser = asyncHandler(async (req, res) => {
  // get user id
  const { id } = req.params;

  // get form data
  const { name, email, phone } = req.body;

  // check valid email
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // check valid phone number
  if (!isValidMobile(phone)) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  // upate data
  const user = await User.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true }
  );

  //response
  res.status(200).json({ message: "User data updated successful", user });
});
