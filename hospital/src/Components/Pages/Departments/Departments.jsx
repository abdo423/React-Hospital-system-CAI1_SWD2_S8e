import React from 'react';
import Departments from '../Departments/DCompopemts/Departments';


const departmentsData = [
  { title: 'Plastic Surgery', imageUrl: '/images/01.png' },
  { title: 'Rhinology', imageUrl: '/images/01.png' },
  { title: 'Urology', imageUrl: '/images/03.png' },
  { title: 'Gastroenterology', imageUrl: '/images/04.png' },
  { title: 'Otology', imageUrl: '/images/05.png' },
  { title: 'Pulmonology', imageUrl: '/images/06.png' },
  { title: 'Otology', imageUrl: '/images/05.png' },
  { title: 'Dental Care', imageUrl: '/images/01.png' },
  { title: 'Orthopedics', imageUrl: '/images/03.png' },
  { title: 'Eye Care', imageUrl: '/images/04.png' }
];

const App = () => (
  <Departments
    title="Best Our Departments Center"
    departments={departmentsData}
  />
);

export default App;
