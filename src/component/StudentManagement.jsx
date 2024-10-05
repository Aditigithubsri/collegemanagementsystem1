import React, { useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', course: 'Business Administration' },
  ]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const addStudent = () => {
    const newStudent = { id: students.length + 1, name, course };
    setStudents([...students, newStudent]);
    setName(''); // Clear the input field
    setCourse('');
  };

  return (
    <div>
      <h2>Student Management</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={e => setCourse(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentManagement;
