/// <reference types="node" />
import { useContext, useEffect } from 'react';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import SearchBox from '../../components/Search/Search';
import { getEmployees } from '../../services/homeApi';
import { EmployeesContext } from '../../context/employees';
import { HomeContainer } from './style';

export default function HomePage() {
  const { setEmployees } = useContext(EmployeesContext);
  useEffect(() => {
    async function fetchEmployees() {
      const response = await getEmployees();
      setEmployees(response);
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
