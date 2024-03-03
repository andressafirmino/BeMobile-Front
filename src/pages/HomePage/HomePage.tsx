import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import SearchBox from '../../components/Search/Search';
import { HomeContainer } from './style';

export default function HomePage() {
  return (
    <HomeContainer>
      <SearchBox />
      <EmployeesTable />
    </HomeContainer>
  );
}
