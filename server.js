const express = require('express');
const dotenv = require("dotenv").config();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/authRoutes');
const recipeRoutes = require('./Routes/recipeRoutes');
const {errorHandler} = require('./middlewares/authMiddleware');


const connectDB = require('./Database/dbConnection');

const app = express();
app.use(express.json());


app.use(cors());

connectDB();


app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);



app.use(errorHandler);


const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
