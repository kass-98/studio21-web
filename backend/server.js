import app from './app.js';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
dotenv.config();


const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor en  http://localhost:${PORT}`);
});