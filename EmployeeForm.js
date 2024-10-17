import React, { useState } from 'react';

function EmployeeForm() {
  const [employee, setEmployee] = useState({ name: '', contact: '', role: '', salary: '' });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/employees/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });
    if (response.ok) {
      alert('Employee added successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
      <input name="contact" type="text" placeholder="Contact" onChange={handleChange} required />
      <input name="role" type="text" placeholder="Role" onChange={handleChange} required />
      <input name="salary" type="number" placeholder="Salary" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
