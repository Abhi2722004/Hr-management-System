const express = require('express');
const router = express.Router();

// Sample route for attendance
router.get('/', (req, res) => {
    res.json({ message: 'Attendance route is working' });
});

module.exports = router;
