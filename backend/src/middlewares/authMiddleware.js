import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader){
      return res.status(401).json({message: 'no se proporciono un token de autenticacion'});
    }
    // el token se espera en el formato "Bearer <token>"
    const token = authHeader.split(' ')[1]; //token viene despues del Bearer

    // verificar y decosificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // agregar la informacion del usuario decodificada al objeto de solicitd
    req.user = decoded;
    if(decoded.userId) req.user.id = decoded.userId;
    next();
  }
  catch(error){
    res.status(401).json({message: 'token invalido'});

  }
}