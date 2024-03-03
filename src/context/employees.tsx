import { ReactNode, createContext, useState } from 'react';
import { EmployeeDataType } from '../protocols';

interface EmloyeesContextProps {
  employees: EmployeeDataType[];
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeDataType[]>>;
}

export const EmployeesContext = createContext<EmloyeesContextProps>({
  employees: [],
  setEmployees: () => {},
});

interface EmployeeProviderProps {
  children: ReactNode;
}

export default function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<EmployeeDataType[]>([]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
