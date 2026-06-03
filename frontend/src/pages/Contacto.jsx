import "../styles/contacto.css";
import admins from "../assets/admins.jpg";

const Contacto = () => {
  return (
    <section className="contacto-section">

      <div className="contacto-content">

        <div className="contacto-left">

          <h2>¡Hablemos!</h2>

          <p>
            Estamos emocionados de escucharte y trabajar juntos en tu próximo
            proyecto fotográfico o cinematográfico.
          </p>

          <p>
            Ya sea que tengas una idea clara en mente o simplemente quieras
            explorar las posibilidades, estoy aquí para ayudarte a hacer
            realidad tu visión.
          </p>

          <p>
            No dudes en ponerte en contacto con nosotros a través del siguiente
            formulario. ¡Esperamos saber de ti pronto!
          </p>

          <form className="contacto-form">

            <input
              type="text"
              placeholder="Nombre"
            />

            <div className="fila">

              <input
                type="tel"
                placeholder="Teléfono"
              />

              <input
                type="text"
                placeholder="Asunto"
              />

            </div>

            <input
              type="email"
              placeholder="Email"
            />

            <textarea
              rows="4"
              placeholder="Mensaje"
            ></textarea>

            <button type="submit">
              Enviar
            </button>

          </form>

        </div>

        <div className="contacto-right">

          <img
            src={admins}
            alt="Studio 21"
          />

        </div>

      </div>

    </section>
  );
};

export default Contacto;