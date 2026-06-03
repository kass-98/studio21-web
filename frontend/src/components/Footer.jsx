import { Link } from "react-router-dom";
import "../styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">

      
      <div className="footer-col footer-left">
        <h2>STUDIO 21</h2>
        <p>Capturamos momentos que viven para siempre</p>
      </div>

      <div className="footer-col footer-right">

        <h3>REDES</h3>

        <a href="https://www.facebook.com/JesusNegreteFotografo/photos?locale=es_LA" target="_blank" rel="noreferrer">
          Facebook
        </a>

        <a href="https://www.instagram.com/studio21mx_com/" target="_blank" rel="noreferrer">
          Instagram
        </a>

        <div className="footer-line"></div>

        <h3>UBICACIÓN</h3>
        <p>Chihuahua, México</p>

        <Link to="/terminos" className="footer-link">
          Términos y Condiciones
        </Link>

        

      </div>

    </footer>
  );
};

export default Footer;