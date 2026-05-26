import "../styles/hero.css";
import modelo from "../assets/inicio.JPG";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
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

        <Link to="/servicios" className="btn-reservar">
          <button>Reservar ahora</button>
        </Link>
        
      </div>

      <div className="hero-image">
        <img src={modelo} alt="modelo" />
      </div>

    </section>
  );
};

export default Hero;