/// <reference types="node" />
import { useEffect, useState } from 'react';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import SearchBox from '../../components/Search/Search';
import { getEmployees } from '../../services/homeApi';
import { HomeContainer } from './style';

export default function HomePage() {
  const [employees, setEmployees] = useState(null);
  console.log(employees);
  useEffect(() => {
    async function fetchEmployees() {
      const response = await getEmployees();
      setEmployees(response);
      console.log(response);
    }
    fetchEmployees();
  }, []);
  return (
    <HomeContainer>
      <SearchBox />
      <EmployeesTable />
    </HomeContainer>
  );
}
