const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employee = require('./routes/employee'); // Ensure the path is correct
const attendance = require('./routes/attendance'); // Ensure the path is correct

const app = express(); // Initialize the app here

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Define your routes here
app.use('/api/employees', employee );
app.use('/api/attendance', attendance );

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hr_management', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
