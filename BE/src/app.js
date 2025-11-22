const express= require('express')
const app= express();
const authRoutes = require('./routes/auth.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
app.use("/api/auth", authRoutes);
module.exports = app;