import express, { Router } from 'express';
import { registro, login } from '../controllers/authController.js';

import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/registro', registro);
router.post('/login', login);

router.get("/test", auth, (req, res) => {
  res.json(req.user);
});

export default router;