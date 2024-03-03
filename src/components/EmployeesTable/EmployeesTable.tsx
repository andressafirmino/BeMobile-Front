import { useContext } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { EmployeesContext } from '../../context/employees';
import { EmployeesTableContainer } from './style';

export default function EmployeesTable() {
  const { employees, filteredEmployees } = useContext(EmployeesContext);
  console.log(employees);
  return (
    <EmployeesTableContainer>
      <TableHeader />
      {filteredEmployees.length > 0
        ? filteredEmployees.map((employee, i) => <TableRow key={i} {...employee} />)
        : filteredEmployees.length === 0 && employees.map((employee, i) => <TableRow key={i} {...employee} />)}
    </EmployeesTableContainer>
  );
}
