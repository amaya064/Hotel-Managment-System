import Booking from "../models/Booking.model.js";


export const createBooking = async (req, res, next) => {
    try{
        const listing =await Booking.create(req.body);
        return res.status(201).json(Booking);

    } catch (error) {
        next(error);
    }
}