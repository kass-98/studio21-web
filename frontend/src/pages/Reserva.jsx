import { useState } from "react";

export default function Reserva() {

  const [form, setForm] = useState({
    date: "",
    time: "",
    sessionType: "bodas"
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setMessage("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Debes iniciar sesión para reservar");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage("Reserva creada correctamente");

      setForm({
        date: "",
        time: "",
        sessionType: "bodas"
      });

    } catch (error) {

      setError(error.message);

    }

  };

  return (

    <div className="container mt-5">

      <h2>Reservar sesión</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label>Fecha</label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="form-control"
            required
          />

        </div>

        <div className="mb-3">

          <label>Hora</label>

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="form-control"
            required
          />

        </div>

        <div className="mb-3">

          <label>Tipo de sesión</label>

          <select
            name="sessionType"
            value={form.sessionType}
            onChange={handleChange}
            className="form-control"
          >

            <option value="bodas">Bodas</option>
            <option value="xv">XV Años</option>
            <option value="social">Social</option>
            

          </select>

        </div>

        <button
          className="btn btn-dark"
          type="submit"
        >
          Reservar
        </button>

      </form>

      {message && (
        <p className="text-success mt-3">
          {message}
        </p>
      )}

      {error && (
        <p className="text-danger mt-3">
          {error}
        </p>
      )}

    </div>

  );
}