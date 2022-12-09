const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const  usuarios  = require('./routes/usuarioRoutes');
const { conn } = require('./config/db');

conn();
app.use(express.json());

const API_BASE = "/api/tecnofrios"

// API's
app.use(API_BASE, usuarios);
 


app.listen(port, () => {
    console.log(`Server running on ${port}!`);
})