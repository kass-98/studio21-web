import "../styles/hero.css";
import modelo from "../assets/inicio.JPG";
import bodas from "../assets/bodas.jpg";
import xv from "../assets/xv.jpg";
import social from "../assets/social.jpg";

import { Link } from "react-router-dom";


const Hero = () => {

  const token = localStorage.getItem("token");
  return (
    <>
    <section className="hero">

      <div className="hero-card">
        <p className="hero-subtitle">Studio 21: Fotografía y <br />
          Producción Audiovisual
        </p>

        <h1>
          Capturando <br />
          Momentos
          Perfectos
        </h1>

        <Link
          to={token ? "/reserva" : "/login?redirect=reserva"}
          className="btn-reservar"
        >
          <button>Reservar ahora</button>
        </Link>
        
      </div>

      <div className="hero-image">
        <img src={modelo} alt="modelo" />
      </div>

    </section>

    <section className="nuestro-trabajo">
      <h2>Nuestro trabajo</h2>

      <div className="trabajos-grid">

        <div className="trabajo-card">
          <img src={bodas} alt="Bodas" />
          <Link to="/servicios/bodas" className="btn-reservar">
          <button>BODAS</button>
        </Link>
          
        </div>

        <div className="trabajo-card">
          <img src={xv} alt="XV años" />
          <h3>QUINCEAÑERAS</h3>
          
        </div>

        <div className="trabajo-card">
          <img src={social} alt="Social" />
          <h3>SOCIALES</h3>
          
        </div>

      </div>

    </section>

    
    </>
  );
};

export default Hero;