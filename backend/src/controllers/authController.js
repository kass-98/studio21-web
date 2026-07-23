import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';


//controlador registro de usuarios
export const registro = async (req, res)=>{
  try{
    const {name, email, password, role}= req.body;

    //validar que contenga email y password el body
    if(!name || !email||!password){
      return res.status(400).json({message: 'Name, Email y password son requeridos'});
    }
    const existingUser = await User.findOne({email});
    if (existingUser){
      return res.status(400).json({message: 'El email ya está registrado'});
    }

    const passwordEncriptado = await bcrypt.hash(password, 7);
    const user = new User({
      name,
      email,
      password: passwordEncriptado,
      role
    });

    await user.save();
    res.status(201).json({message: 'usuario registrado exitosamente'});
  }catch (error) {
  console.log("ERROR REAL:", error);
  res.status(500).json({ message: error.message });
}
}

//controlador login de usuario
export const login = async (req, res) => {
  try{
    const {email, password} = req.body;
    //validar que los campos no esten vacios el email y password
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
      res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      },
      message: 'login exitoso'
    });
  
  }
  catch(error){
     console.log("ERROR LOGIN:", error);

    res.status(500).json({
      message: error.message
    });


  }
}
