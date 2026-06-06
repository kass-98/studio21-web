import { useEffect, useState } from "react";

export default function MisReservas() {

  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerReservas();
  }, []);

  const obtenerReservas = async () => {

    const token = localStorage.getItem("token");

    try {

      const response = await fetch(
        "http://localhost:5000/api/bookings/my",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setBookings(data);

    } catch (err) {
      setError(err.message);
    }

  };

  return (
    <div className="container mt-5">

      <h2>Mis Reservas</h2>

      {error && <p className="text-danger">{error}</p>}

      {bookings.length === 0 ? (
        <p>No tienes reservas aún</p>
      ) : (
        <table className="table mt-3">

          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Servicio</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.sessionType}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}