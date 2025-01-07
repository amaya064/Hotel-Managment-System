import express from "express";
import { createUser, signInUser, getProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.post("/signin", signInUser);
router.post("/profile", getProfile); // Changed to POST to handle token in body

export default router;
