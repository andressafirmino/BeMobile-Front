import Header from './components/Header/Header';
import EmployeeProvider from './context/employees';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <EmployeeProvider>
      <Header />
      <HomePage />
    </EmployeeProvider>
  );
}

export default App;
