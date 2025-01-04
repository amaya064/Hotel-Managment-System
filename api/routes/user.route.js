import express from 'express';
import { createUser, signInUser } from '../controllers/user.controller.js';

const router = express.Router();

// Route to handle user signup
router.post('/', createUser);
router.post('/signin', signInUser);

export default router;
