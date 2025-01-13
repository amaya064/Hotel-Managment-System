import Booking from "../models/Booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
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
      !email ||
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
      email,
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



export const getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Fetch bookings related to the email
    const bookings = await Booking.find({ email });

    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for this email." });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    // Find and delete the booking by ID
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    res.status(200).json({ message: "Booking deleted successfully!" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};
