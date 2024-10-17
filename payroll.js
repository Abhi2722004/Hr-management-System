const express = require('express');
const router = express.Router();
const Payroll = require('../models/Payroll');

 
router.post('/calculate', async (req, res) => {
  const payroll = new Payroll({
    employeeId: req.body.employeeId,
    salary: req.body.salary,
    deductions: req.body.deductions,
    netPay: req.body.salary - req.body.deductions,
  });
  try {
    await payroll.save();
    res.status(201).json(payroll);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
