import React from 'react';
import DepartmentsSection from '../Departments/DepartmentsSection/DepartmentsSection';
import PagesHeroSection from '../../Shared/PagesHeroSection/PagesHeroSection';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDepartments } from '../../../APIs/DepartmentsApi';

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

const Departments = () => 
{
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departmentsSlice.departments);
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);
  return (
    <>
      <PagesHeroSection title="Department The Mutki" subTitle="Departments" />
      <DepartmentsSection title="Best Our Departments Center" departments={departments} />
    </>
  );
}
  

export default Departments;
