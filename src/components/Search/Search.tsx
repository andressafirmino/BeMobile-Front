import { useContext, useState } from 'react';
import { EmployeesContext } from '../../context/employees';
import EmployeeFilter from '../../utils/EmployeeFilter';
import { SearchContainer, SearchIcon, SearchInput, SearchInputBox, Title } from './style';

export default function SearchBox() {
  const { employees, setFilteredEmployees } = useContext(EmployeesContext);
  const [searchText, setSearchText] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EmployeeFilter(searchText, employees, setFilteredEmployees);
  };

  return (
    <SearchContainer>
      <Title>Funcionários</Title>
      <form onSubmit={handleFormSubmit}>
        <SearchInputBox>
          <SearchInput
            placeholder="Pesquisar"
            type="text"
            onChange={(e) => {
              EmployeeFilter(searchText, employees, setFilteredEmployees);
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <SearchIcon></SearchIcon>
        </SearchInputBox>
      </form>
    </SearchContainer>
  );
}
