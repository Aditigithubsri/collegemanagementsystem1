import React, { useState } from 'react';

const FacultyManagement = () => {
  const [faculty, setFaculty] = useState([
    { id: 1, name: 'Dr. Alan Walker', department: 'Computer Science' },
    { id: 2, name: 'Dr. Sarah Johnson', department: 'Business Administration' },
  ]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const addFaculty = () => {
    const newFaculty = { id: faculty.length + 1, name, department };
    setFaculty([...faculty, newFaculty]);
  };

  return (
    <div>
      <h2>Faculty Management</h2>
      <ul>
        {faculty.map(faculty => (
          <li key={faculty.id}>
            {faculty.name} - {faculty.department}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Faculty Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={e => setDepartment(e.target.value)}
      />
      <button onClick={addFaculty}>Add Faculty</button>
    </div>
  );
};

export default FacultyManagement;
