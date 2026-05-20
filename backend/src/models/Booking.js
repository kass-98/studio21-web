import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  date: {
    type: String,
    required: true
  },

  time: {
    type: String,
    required: true
  },

  sessionType: {
    type: String,
    default: "retrato"
  },

  status: {
    type: String,
    enum: ["pendiente", "confirmada", "cancelada"],
    default: "pendiente"
  }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;