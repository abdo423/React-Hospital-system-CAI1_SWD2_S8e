import React from 'react';
import DepartmentsSection from '../Departments/DepartmentsSection/DepartmentsSection';
import PagesHeroSection from '../../Shared/PagesHeroSection/PagesHeroSection';
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
  
  <>
  <PagesHeroSection title="Department The Mutki" subTitle="Departments" />
  <DepartmentsSection
    title="Best Our Departments Center"
    departments={departmentsData}
  />
  </>
  
);

export default App;
