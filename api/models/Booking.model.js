import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    regularPrice: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    numberOfRooms: { type: Number, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    paymentDetails: {
      cardNumber: { type: String, required: true },
      cardName: { type: String, required: true },
      expiryDate: { type: String, required: true },
      cvv: { type: String, required: true },
    },
  },
  { timestamps: true }
);


const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
