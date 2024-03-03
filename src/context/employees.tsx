import { ReactNode, createContext, useState } from 'react';
import { EmployeeDataType } from '../protocols';

interface EmloyeesContextProps {
  employees: EmployeeDataType[];
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeDataType[]>>;
  filteredEmployees: EmployeeDataType[];
  setFilteredEmployees: React.Dispatch<React.SetStateAction<EmployeeDataType[]>>;
}

export const EmployeesContext = createContext<EmloyeesContextProps>({
  employees: [],
  setEmployees: () => {},
  filteredEmployees: [],
  setFilteredEmployees: () => {},
});

interface EmployeeProviderProps {
  children: ReactNode;
}

export default function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<EmployeeDataType[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeDataType[]>([]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        filteredEmployees,
        setFilteredEmployees,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
