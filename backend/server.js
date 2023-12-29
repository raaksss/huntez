const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connection to MongoDB and start the server
mongoose.connect('mongodb+srv://rakshitamanocha:rakshitamanocha@cluster0.gvpdf9o.mongodb.net/HuntEz?retryWrites=true&w=majority')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
