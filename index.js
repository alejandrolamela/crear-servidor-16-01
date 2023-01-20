const express = require("express");
const db = require('./src/utils/db.js');
console.log('DB dentro de index', db);
db.connectDB();
// All routes imports 
const indexRoutes = require('./src/api/index/index.routes');
const teachersRoutes = require('./src/api/teachers/teacher.routes')

const server = express();

// Transformar el contenido o cuerpo de ls peticiones POST (req.body)
// Convierte cuando enviamos un post con json al servidor
server.use(express.json());
server.use(express.urlencoded({extended: true}));
// Configuracion de todaslas rutasde nuestro serviddor
server.use('/', indexRoutes);
server.use('/teachers',teachersRoutes);
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`running server  in http://localhost:${PORT}/`)
});

// Ahora probamos si arranca el servidor con  npm run dev, en nuestra termnal