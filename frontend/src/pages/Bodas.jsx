import { useRef } from "react";
import "../styles/bodas.css";

import img1 from "../assets/Bodas/1.jpg";
import img2 from "../assets/Bodas/2.jpg";
import img3 from "../assets/Bodas/3.jpg";
import img4 from "../assets/Bodas/4.jpg";
import img5 from "../assets/Bodas/5.jpg";
import img6 from "../assets/Bodas/6.jpg";
import img7 from "../assets/Bodas/7.jpg";
import img8 from "../assets/Bodas/8.jpg";
import img9 from "../assets/Bodas/9.jpg";
import img10 from "../assets/Bodas/10.jpg";

const Bodas = () => {

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;

    if (direction === "left") {
      current.scrollBy({ left: -320, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
      
    <section className="bodas">
      {}
      <div className="bodas-texto">
        <h3>"Una boda es una celebración en la que dos corazones se convierten en uno, marcando el inicio de un viaje compartido hacia la felicidad."</h3>
        
      </div>


      {}
      <div className="bodas-hero">
        <img src={img1} alt="Bodas hero" />
      </div>

      {}
      <div className="bodas-texto">
        <h2>POR QUÉ CADA MOMENTO ES IMPORTANTE</h2>
        <p>CUBRIMOS CADA DETALLE</p>
      </div>

      {}
      <div className="carousel-wrapper">

        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="carousel" ref={carouselRef}>

          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
          <img src={img10} />

        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          ›
        </button>

      </div>

    </section>
  );
};

export default Bodas;