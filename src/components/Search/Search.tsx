import { useContext } from 'react';
import { EmployeesContext } from '../../context/employees';
import EmployeeFilter from '../../utils/EmployeeFilter';
import { SearchContext } from '../../context/search';
import { SearchContainer, SearchIcon, SearchInput, SearchInputBox, Title } from './style';

export default function SearchBox() {
  const { employees, setFilteredEmployees } = useContext(EmployeesContext);
  const { closeSearch, setCloseSearch, searchText, setSearchText } = useContext(SearchContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EmployeeFilter(searchText, employees, setFilteredEmployees);
  };

  return (
    <SearchContainer>
      <Title>Funcionários</Title>
      <form onSubmit={handleFormSubmit}>
        <SearchInputBox
          onClick={() => {
            if (closeSearch === 'none') setCloseSearch('block');
            else {
              setCloseSearch('none');
            }
          }}
        >
          <SearchInput
            placeholder="Pesquisar"
            type="text"
            onChange={(e) => {
              EmployeeFilter(e.target.value, employees, setFilteredEmployees);
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
