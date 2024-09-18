const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();   // To load environment variables from a .env file

const app = express();
app.use(cors());              // Allow Cross-Origin Resource Sharing (important for React)
app.use(express.json());       // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes (these will handle blog posts and contact form submissions)
const blogRoutes = require('./routes/blogRoutes');
app.use('/api/blogs', blogRoutes);  // Use the blog routes

// Listen on port 5000 or a port defined in the environment variables
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
