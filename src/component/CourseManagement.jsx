import React, { useState } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Computer Science', duration: '4 years' },
    { id: 2, name: 'Business Administration', duration: '3 years' },
  ]);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const addCourse = () => {
    const newCourse = { id: courses.length + 1, name, duration };
    setCourses([...courses, newCourse]);
  };

  return (
    <div>
      <h2>Course Management</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default CourseManagement;
