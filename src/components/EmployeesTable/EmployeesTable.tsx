import { useContext } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { EmployeesContext } from '../../context/employees';
import { EmployeesTableContainer } from './style';

export default function EmployeesTable() {
  const { employees, filteredEmployees } = useContext(EmployeesContext);

  return (
    <EmployeesTableContainer>
      <TableHeader />
      {filteredEmployees.length > 0
        ? filteredEmployees.map((employee, i) => <TableRow key={i} {...employee} />)
        : employees.map((employee, i) => <TableRow key={i} {...employee} />)}
    </EmployeesTableContainer>
  );
}
