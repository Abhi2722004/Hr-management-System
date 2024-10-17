// models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    jobRole: { type: String, required: true },
    salary: { type: Number, required: true },
    performanceHistory: { type: [String], default: [] },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
