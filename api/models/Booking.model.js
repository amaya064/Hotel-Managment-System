import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
      regularPrice: {
        type: Number,
        required: true,
      },
      bedrooms: {
        type: Number,
        required: true,
      },
      numberOfRooms: {
        type: Number,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    { timestamps: true } // Adds createdAt and updatedAt timestamps
  );
  
  // Create a model from the schema
  const Booking = mongoose.model("Booking", BookingSchema);
  
  export default Booking;
  