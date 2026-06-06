import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reserva from "./pages/Reserva";
import MisReservas from "./pages/MisReservas";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Bodas from "./pages/Bodas";
import Xv from "./pages/Xv";
import Social from "./pages/Social";
import Contacto from "./pages/Contacto";
import Terminos from "./pages/Terminos";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/bodas" element={<Bodas />} />
        <Route path="/servicios/xv" element={<Xv />} />
        <Route path="/servicios/social" element={<Social />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;