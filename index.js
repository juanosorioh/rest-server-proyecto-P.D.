const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { default: helmet } = require('helmet');

//inicializaciones
require('dotenv').config();
const app = express();

// Configuraciones
const { port } = require('./src/config/variable');

//middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

//rutas
app.use('/', require('./src/routes/users.routes'));


//archivos estaticos
app.listen(port, ()=>console.log(`servidor corriendo en localhost:${port}`));