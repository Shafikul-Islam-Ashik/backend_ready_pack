import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

/**
 * @description user login system
 * @method POST
 * @route /api/v1/login
 * @access public
 */
export const loginUser = asyncHandler(async (req, res) => {
  // get form data
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // get data from db
  const loginUser = await User.findOne({ email: email });

  // check user
  if (!loginUser) {
    return res.status(404).json({ message: "Invalid email address" });
  }

  // check password
  const passCheck = await bcrypt.compare(password, loginUser.password);

  if (!passCheck) {
    return res.status(400).json({ message: "Wrong password" });
  }

  // access token
  const accessToken = await jwt.sign(
    { email: loginUser.email },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    }
  );

  // set access token
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.APP_ENV === "Developmemt" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // response
  res.status(200).json({
    message: `Hello ${loginUser.name}, you are logged in`,
    user: loginUser,
  });
});

/**
 * @description user logout system
 * @method GET
 * @route /api/v1/logout
 * @access public
 */

export const logoutUser = asyncHandler(async (req, res) => {
  // clear auth cookie
  res.clearCookie("accessToken");

  // response
  res.status(200).json({ message: "You are logged out" });
});
