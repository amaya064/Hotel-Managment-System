import express from "express";
import { createBooking, getBookingsByEmail, deleteBooking } from "../controllers/Booking.controller.js";

const router = express.Router();

router.post("/create", createBooking); // Create a booking
router.get("/:email", getBookingsByEmail); // Get bookings by email
router.delete("/:bookingId", deleteBooking); // Delete booking by ID

export default router;
