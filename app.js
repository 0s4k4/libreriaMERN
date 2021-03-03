// app.js

const express = require('express');
//definir base de datos
const connectDB = require('./config/db');

const app = express();

// Connectar base de datos
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));