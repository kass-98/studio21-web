import bcrypt from 'bcrypt';
import {User} from '../models/User.js';
import jwt from 'jsonwebtoken';


//controlador registro usuario
export const registro = async (req, res)=>{
  try{
    const {email, password}= req.body;

    //validar que contenga email y password el body
    if(!email||!password){
      return res.status(400).json({message: 'Email y password son requeridos'});
    }
    const existingUser = await User.findOne({email});
    if (existingUser){
      return res.status(400).json({message: 'El email ya está registrado'});
    }

    const passwordEncriptado = await bcrypt.hash(password, 7);
    const user = new User({
      email,
      password: passwordEncriptado
    });
    await user.save();
    res.status(200).json({message: 'usuario registrado exitosamente'});
  }catch(error){
    res.status(500).json({message: 'algo salio mal'});

  }
}

//controlador login de usuario
export const login = async (req, res) => {
  try{
    const {email, password} = req.body;
    //validar que no esten vacios el email y password
    if(!email || !password){
      return res.status(400).json({message: 'email y password son requeridos'});
    }

    //validar que el email exista en la base de datos
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ message: 'el usuario no está registrado'});
    }
    // comparar la contraseña ingresada con la contraseña encriptada en la base de datos
    const contraseñaValida = await bcrypt.compare(password, user.password);
    if(!contraseñaValida){
      return res.status(400).json({message : 'contraseña incorrecta'});
    }

    //generar un token JWT
    const token = jwt.sign(
      {userId: user._id, role: user.role},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
  );
  res.json({token, message: 'login exitoso'});
  
  }
  catch(error){
    res.status(500).json({message: 'algo salio mal'});

  }
}
