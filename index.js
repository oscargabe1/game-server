// require('dotenv').config();
const {port} = require('./globals/environment')
const express = require('express');
const cors = require('cors');

// const {dbConnection} = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

// //Base de datos
// dbConnection();

// //Directorio Público
// app.use(express.static('public'));


// Cargamos las rutas
app.get('/', (req, res) => {
    console.log('bruh');
    res.send("yes");
});

// Importamos las rutas
var api_routes = require('./src/routes/api_routes');

app.use('/api', api_routes);




app.listen(port, ()=>{
    console.log('Servidor corriendo en puerto ' + port);
    
});