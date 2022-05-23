const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 4002;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName: 'test_database'
})
.then(()=>{
    console.log('Conexion de base de datos lista')
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send('ruta testing')
});

//rutas
const premioRuta = require('./src/routes/premioNobel');
app.use('/v1/premio',premioRuta);

app.listen(PORT,()=>{
    console.log(`API en http://localhost:${PORT}`)
})

