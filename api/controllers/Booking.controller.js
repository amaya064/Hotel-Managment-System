import Booking from "../models/Booking.model.js";

export const createBooking = async (req, res) => {
    try {
      const {
        regularPrice,
        bedrooms,
        numberOfRooms,
        contactNumber,
        address,
      } = req.body;
  
      // Debugging: Log the received data
      console.log("Received booking details:", req.body);
  
      // Validate that all required fields are provided
      if (
        !regularPrice ||
        !bedrooms ||
        !numberOfRooms ||
        !contactNumber ||
        !address
      ) {
        return res.status(400).json({ error: "All required fields must be provided." });
      }
  
      // Create a new booking entry in the database
      const newBooking = new Booking({
        regularPrice,
        bedrooms,
        numberOfRooms,
        contactNumber,
        address,
      });
  
      // Save the booking in the database
      const savedBooking = await newBooking.save();
  
      // Send a success response with the saved booking data
      res.status(201).json({ message: "Booking created successfully!", booking: savedBooking });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
  };
  