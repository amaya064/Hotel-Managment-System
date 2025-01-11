import Booking from "../models/Booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      regularPrice,
      bedrooms,
      numberOfRooms,
      contactNumber,
      address,
      paymentDetails,
    } = req.body;

    // Check for missing required fields
    if (
      !name ||
      !regularPrice ||
      !bedrooms ||
      !numberOfRooms ||
      !contactNumber ||
      !address ||
      !paymentDetails?.cardNumber ||
      !paymentDetails?.cardName ||
      !paymentDetails?.expiryDate ||
      !paymentDetails?.cvv
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create a new booking
    const newBooking = new Booking({
      name,
      regularPrice,
      bedrooms,
      numberOfRooms,
      contactNumber,
      address,
      paymentDetails,
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      message: "Booking and payment processed successfully!",
      booking: savedBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};
