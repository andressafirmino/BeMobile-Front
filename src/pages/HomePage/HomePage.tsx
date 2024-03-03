/// <reference types="node" />
import { useContext, useEffect } from 'react';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import SearchBox from '../../components/Search/Search';
import { getEmployees } from '../../services/homeApi';
import { EmployeesContext } from '../../context/employees';
import { SearchContext } from '../../context/search';
import { HomeContainer } from './style';

export default function HomePage() {
  const { setEmployees, setFilteredEmployees } = useContext(EmployeesContext);
  const { setCloseSearch, setSearchText } = useContext(SearchContext);
  useEffect(() => {
    async function fetchEmployees() {
      const response = await getEmployees();
      setEmployees(response);
    }
    fetchEmployees();
  }, []);
  return (
    <HomeContainer
      onClick={() => {
        setCloseSearch('none'), setFilteredEmployees([]), setSearchText('');
      }}
    >
      <SearchBox />
      <EmployeesTable />
    </HomeContainer>
  );
}
