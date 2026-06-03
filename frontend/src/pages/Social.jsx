import "../styles/social.css";

import img1 from "../assets/Social/1.jpg";
import img2 from "../assets/Social/2.jpg";
import img3 from "../assets/Social/3.jpg";
import img4 from "../assets/Social/4.jpg";
import img5 from "../assets/Social/5.jpg";
import img6 from "../assets/Social/6.jpg";
import img7 from "../assets/Social/7.jpg";
import img8 from "../assets/Social/8.jpg";

const Social = () => {
  return (
    <section className="social">

      {/* HERO */}
      <div className="social-hero">
        <img className="hero-img" src={img1} alt="Evento social" />
      </div>

      {/* TEXTO */}
      <div className="social-texto">
        <h2>CELEBRAMOS LOS MOMENTOS QUE UNEN</h2>
        <p>
          Reuniones, aniversarios, fiestas privadas y eventos especiales
          capturados con un estilo auténtico y elegante.
        </p>
      </div>

      {/* BLOQUE 1 */}
      <div className="social-layout">

        <div className="social-grande">
          <img src={img2} alt="" />
        </div>

        <div className="social-columna">
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>

      </div>

      {/* FRASE */}
      <div className="social-frase">
        <h3>
          "Las mejores fotografías son aquellas que te hacen revivir el momento."
        </h3>
      </div>

      {/* BLOQUE 2 */}
      <div className="social-layout reverse">

        <div className="social-columna">
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>

        <div className="social-grande">
          <img className="foto7" src={img7} alt="" />
        </div>

      </div>

      {/* FINAL */}
      <div className="social-banner">
        <img className="banner-img" src={img8} alt="" />
      </div>

    </section>
  );
};

export default Social;