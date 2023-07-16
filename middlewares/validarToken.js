const jwt  = require("jsonwebtoken");
const UserModel = require('../model/usuarios.js')






const validarToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
console.log(token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.usuario = await UserModel.findByPk(decoded.uid, {
        attributes: {
          exclude: ["password", "nombre_optica", "direccion_fiscal", "rif", "telefono", "direccion_envio", "createdAt", "updatedAt"]
        }
      });

      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Hubo un error" });
    }
  }

  if (!token) {
    const error = new Error("Token no válido");
    return res.status(401).json({ msg: error.message });
  }

  next();
};

module.exports = {
  validarToken
}
