const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app= express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://172.31.104.141:4200'}));

//Routes
app.use('/api/estudiante',require('./Rutas/estudiante.routes'));


// Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});