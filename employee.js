// routes/employeeRoutes.js
const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// Get all employees
router.get('/', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

// Add an employee
router.post('/', async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
});

module.exports = router;
