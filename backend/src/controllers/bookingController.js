import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {

  try {

    console.log("BODY:", req.body); 

    const { date, time, sessionType } = req.body;

    const booking = await Booking.create({
      client: req.user.id,
      date,
      time,
      sessionType
    });

    res.status(201).json(booking);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
};

// Ver todas las reservas
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ver mis reservas
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ client: req.user.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//actualizar reserva
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//eliminar reserva
export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Reserva eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};