import { Dispatch, SetStateAction } from 'react';
import { EmployeeDataType } from '../protocols';

export default function EmployeeFilter(
  value: string,
  employees: EmployeeDataType[],
  setFilteredEmployees: Dispatch<SetStateAction<EmployeeDataType[]>>,
) {
  const valueLower = value.toLowerCase();
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.job.toString().toLowerCase().includes(valueLower) ||
      employee.name.toLowerCase().includes(valueLower) ||
      employee.phone.toLowerCase().includes(valueLower),
  );
  setFilteredEmployees(filteredEmployees);
  return;
}
