import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { userPhoto } from "../utils/multer.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// init router from express
const router = express.Router();

// use verify token
router.use(verifyToken);

// routing
router.route("/").get(getAllUser).post(userPhoto, createUser);
router
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser);

//export default
export default router;
