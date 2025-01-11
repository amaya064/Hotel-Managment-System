import express from 'express';
import { createBooking } from '../controllers/Booking.controller.js';

const router = express.Router();

router.post('/create', createBooking);  

export default router;
