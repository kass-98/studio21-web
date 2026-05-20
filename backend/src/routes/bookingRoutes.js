import express from "express";
import { createBooking } from "../controllers/bookingController.js";
import { auth } from "../middlewares/authMiddleware.js";


const router = express.Router();

// crear reserva
router.post("/", auth, createBooking);

router.get("/", auth, getAllBookings);
router.get("/my", auth, getMyBookings);
router.patch("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);

export default router;