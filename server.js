import app from './backend/app.js';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './backend/src/config/db.js';
dotenv.config();


const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor en  http://localhost:${PORT}`);
});