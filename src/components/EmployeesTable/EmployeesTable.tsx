import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { EmployeesTableContainer } from './style';

export default function EmployeesTable() {
  return (
    <EmployeesTableContainer>
      <TableHeader />
      <TableRow />
    </EmployeesTableContainer>
  );
}
