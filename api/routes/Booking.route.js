import express from 'express';
import { createBooking, getBookingsByEmail } from '../controllers/Booking.controller.js';

const router = express.Router();

router.post('/create', createBooking); 
router.get('/:email', getBookingsByEmail); 

export default router;
