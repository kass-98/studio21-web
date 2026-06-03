import "../styles/xv.css";

import img1 from "../assets/Quinceañeras/1.jpg";
import img2 from "../assets/Quinceañeras/2.jpg";
import img3 from "../assets/Quinceañeras/3.jpg";
import img4 from "../assets/Quinceañeras/4.jpg";
import img5 from "../assets/Quinceañeras/5.jpg";
import img6 from "../assets/Quinceañeras/6.jpg";
import img7 from "../assets/Quinceañeras/7.jpg";
import img8 from "../assets/Quinceañeras/8.jpg";
import img9 from "../assets/Quinceañeras/9.jpg";

import img11 from "../assets/Quinceañeras/11.jpg";
import img12 from "../assets/Quinceañeras/12.jpg";

const XV = () => {
  return (
    <section className="xv">

      {/* HERO */}
      <div className="xv-hero">
        <img src={img1} alt="XV Hero" />
      </div>

      {/* FRASE */}
      <div className="xv-texto">
        <h2>UN DÍA QUE MERECE SER RECORDADO PARA SIEMPRE</h2>
        <p>
          Capturamos cada sonrisa, cada emoción y cada detalle de una noche única.
        </p>
      </div>

      {/* GALERÍA */}
      <div className="xv-grid">

        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />

      </div>

      {/* IMAGEN DESTACADA */}
      <div className="xv-banner">
        <img src={img8} alt="" />
      </div>

      {/* TEXTO */}
      <div className="xv-texto xv-texto-detalle">
        <h2>CADA DETALLE CUENTA UNA HISTORIA</h2>
        <p>
          Desde la preparación hasta el último baile, inmortalizamos cada momento.
        </p>
      </div>

      {/* GALERÍA FINAL */}
      <div className="xv-grid">

        <img src={img9} alt="" />
        
        <img src={img11} alt="" />
        <img src={img12} alt="" />

      </div>

    </section>
  );
};

export default XV;