import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/registro.css";

export default function Registro(){

const navigate=useNavigate();

const [form,setForm]=useState({
name:"",
email:"",
password:""
});

const [mensaje,setMensaje]=useState("");

const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

const response=await fetch(
"http://localhost:5000/api/auth/registro",
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

setMensaje(
"Registro exitoso"
);

navigate("/login");

}catch(error){

setMensaje(
error.message
);

}

};

return(

<div className="container-mt-5">

<div className="card-p-5">

<h2>
Crear cuenta
</h2>

<form onSubmit={handleSubmit}>

<input
className="form-control mb-3"
name="name"
placeholder="Nombre"
onChange={handleChange}
/>

<input
className="form-control mb-3"
name="email"
type="email"
placeholder="Correo"
onChange={handleChange}
/>

<input
className="form-control mb-3"
name="password"
type="password"
placeholder="Contraseña"
onChange={handleChange}
/>

<button
className="btn btn-dark w-100"
>
Registrarme
</button>

</form>

<p className="mt-3">

{mensaje}

</p>

</div>

</div>

);

}