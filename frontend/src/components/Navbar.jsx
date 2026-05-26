import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import loginIcon from "../assets/login.png";

export default function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user") || "null"
    );

  const [mostrarSaludo, setMostrarSaludo] =
    useState(true);

  useEffect(() => {

    if (user) {

      const timer =
        setTimeout(() => {

          setMostrarSaludo(false);

        }, 6000);

      return () =>
        clearTimeout(timer);

    }

  }, []);

  const cerrarSesion = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location = "/";

  };

  return (

    <nav className="navbar navbar-expand-lg custom-navbar px-5">

      <Link className="navbar-brand logo" to="/">
        Studio 21
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ms-auto gap-5">

          <li className="nav-item">
            <Link className="nav-link custom-link" to="/">
              Inicio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link custom-link" to="/servicios">
              Servicios
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link custom-link" to="/nosotros">
              Nosotros
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link custom-link" to="/contacto">
              Contacto
            </Link>
          </li>

          <li className="nav-item d-flex align-items-center gap-2">

            {user ? (

              <>

                {mostrarSaludo && (

                  <span className="user-name">

                    Hola, {user.name}

                  </span>

                )}

                <button
                  onClick={cerrarSesion}
                  className="btn btn-dark btn-sm"
                >
                  Salir
                </button>

              </>

            ) : (

              <Link to="/login">

                <img
                  src={loginIcon}
                  alt="login"
                  className="login-icon"
                />

              </Link>

            )}

          </li>

        </ul>

      </div>

    </nav>

  );
}