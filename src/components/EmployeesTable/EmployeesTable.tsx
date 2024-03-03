import { useContext } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { EmployeesContext } from '../../context/employees';
import { EmployeesTableContainer } from './style';

export default function EmployeesTable() {
  const { employees } = useContext(EmployeesContext);
  console.log(employees);
  return (
    <EmployeesTableContainer>
      <TableHeader />
      {employees.map((employee, i) => (
        <TableRow key={i} {...employee} />
      ))}
    </EmployeesTableContainer>
  );
}
