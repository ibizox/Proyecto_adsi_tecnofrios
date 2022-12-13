const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const { conn } = require('./config/db');

conn();

app.use(express.json());
app.use(cors()); 

const API_BASE = "/api/tecnofrios";

// API's
app.use(API_BASE, require('./routes/usuarioRoutes'));
app.use(API_BASE, require('./routes/clienteRoutes')); 


app.listen(port, () => {
    console.log(`Server running on ${port}!`);
})