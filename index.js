const express =require('express');
require('dotenv').config();
const  cors  = require('cors');


// Crear servidor de express
  const app = express();

//CORS

// Habilitar Cors
// const opcionesCors = {
//   origin:  function (origin, callback){

//     if (process.env.FRONTEND_URL.includes()) {
//       callback( null, true);
//     }else {
//       callback(new Error ("Error de cors"))
//     }
//   }  
// };

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-token', 'Bearer'],
}));





//Lectura y Parse del body
  app.use(express.json());

//Rutas
  app.use('/api/auth', require('./routes/usuarios'));
  app.use('/api/events', require('./routes/events'));
  //app.use('/api/productos', require('./routes/productos'));
  app.use('/api/productos', require('./routes/tipoTrabajo'));
  app.use('/pedidos', require('./routes/pedidosRoutes'));
  //app.use('/cdoo', require('./routes/cdoo'));
  
 

// Directorio publico
  app.use(express.static('public'));

// Escuchar peticiones
  app.listen(process.env.PORT, ()=> {
    console.log(`mi app esta corriendo en el puerto ${process.env.PORT}`);
  });



