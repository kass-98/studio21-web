import express from 'express';
import cors from 'cors';

import authRoutes from './src/routes/authRoutes.js';

import { auth } from './src/middlewares/authMiddleware.js';



const app = express();

app.use(cors());
app.use(express.json());

// rutas públicas de auth
app.use('/api/auth', authRoutes);

// ruta protegida (cualquier usuario logueado)
app.get('/protegida', auth, (req, res) => {
  res.json({
    message: 'acceso a ruta protegida exitoso',
    user: req.user
  });
});

// ruta solo admin


export default app;