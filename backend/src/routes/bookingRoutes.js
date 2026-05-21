import express from "express";
import {
  createBooking,
  getAllBookings,
  getMyBookings,
  updateBooking,
  deleteBooking
} from "../controllers/bookingController.js";

import { auth } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// crear reserva
router.post("/", auth, createBooking);

// ver todas (solo admin)
router.get("/", auth, authorize("admin"), getAllBookings);

// ver mis reservas
router.get("/my", auth, getMyBookings);

// actualizar (solo admin)
router.patch("/:id", auth, authorize("admin"), updateBooking);

// eliminar (solo admin)
router.delete("/:id", auth, authorize("admin"), deleteBooking);

export default router;