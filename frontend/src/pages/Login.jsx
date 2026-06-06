import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {

const [form,setForm]=useState({
email:"",
password:""
});

const [error,setError]=useState("");

const [searchParams] = useSearchParams();

const vieneDeReserva =
  searchParams.get("redirect") === "reserva";

const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};

const handleSubmit=async(e)=>{

e.preventDefault();

setError("");

try{

const response=await fetch(
"http://localhost:5000/api/auth/login",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

}
);

const data=await response.json();

if(!response.ok){

throw new Error(
data.message
);

}

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"user",
JSON.stringify(data.user)
);

if (vieneDeReserva) {

  window.location.href = "/reserva";

} else {

  window.location.href = "/";

}

}catch(error){

setError(error.message);

}

};


return(

<div className="login-container">

<div className="login-card">

<h2 className="mb-4">
Iniciar sesión
</h2>

{vieneDeReserva && (

  <div className="alert alert-info">

    Inicia sesión o crea una cuenta para reservar tu cita.

  </div>

)}

<form onSubmit={handleSubmit}>

<input
className="form-control mb-3"
type="email"
name="email"
placeholder="Correo"

onChange={handleChange}
/>

<input
className="form-control mb-3"
type="password"
name="password"
placeholder="Contraseña"

onChange={handleChange}
/>

<button
className="btn btn-dark w-100"
>
Entrar
</button>

<div className="text-center mt-3">

  ¿No tienes cuenta?

  <Link
    to="/registro"
    className="ms-2"
  >
    Registrarse
  </Link>

</div>

</form>

{error && (

<p className="mt-3 text-danger">

{error}

</p>

)}

</div>

</div>

);

}