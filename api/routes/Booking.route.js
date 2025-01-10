import express from 'express';
import { createBooking } from '../controllers/Booking.controller.js';

const router = express.Router();

// Define the POST route for creating a booking
router.post('/create', createBooking);  // Correct route to match the frontend

export default router;
