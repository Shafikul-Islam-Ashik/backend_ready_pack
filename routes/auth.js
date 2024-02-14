import express from "express";
import { loginUser, logoutUser } from "../controllers/authController.js";

// init router from express
const router = express.Router();

// routing
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

//export router
export default router;
