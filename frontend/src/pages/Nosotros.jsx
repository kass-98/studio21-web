import jesus from "../assets/jesus.png";
import arturo from "../assets/arturo.png";
import "../styles/nosotros.css";

const Nosotros = () => {
  return (
    <section className="nosotros">

      <div className="nosotros-intro">
        <h2>Nosotros</h2>

        <p>
          Creemos en el poder de una historia bien contada.
          <br /><br />
          Cada imagen, cada secuencia, cada plano es una pieza de algo más grande:
          una narrativa visual que conecta, emociona y permanece.
          Studio 21 nace de esa convicción.
        </p>
      </div>

      <div className="perfil">
        <div className="perfil-img">
          <img src={jesus} alt="Jesús Negrete" />
        </div>

        <div className="perfil-info">
          <h3>Jesús Negrete</h3>

          <p>
            Soy especialista en marketing, producciones fotográficas y audiovisuales, imagen corporativa y asesoría estratégica. Como cofundador de Studio 21, combino mi experiencia en eventos sociales con una visión orientada a marcas y empresas, creando narrativas visuales auténticas que conectan con las personas y elevan el valor de cada proyecto.
          </p>
        </div>
      </div>

      <div className="perfil perfil-reverse">

        <div className="perfil-info">
          <h3>Arturo Olivas</h3>

          <p>
            Soy fotógrafo y cinematógrafo con una profunda pasión por capturar la esencia de cada momento. Creo que la fotografía trasciende la simple imagen; es un lenguaje visual que narra historias, despierta emociones y preserva memorias que perduran en el tiempo.
            Cada proyecto representa una oportunidad para crear algo auténtico, donde la técnica y la sensibilidad se unen para reflejar la belleza y significado detrás de cada historia.
          </p>
        </div>

        <div className="perfil-img">
          <img src={arturo} alt="Arturo Olivas" />
        </div>

      </div>

    </section>
  );
};

export default Nosotros;