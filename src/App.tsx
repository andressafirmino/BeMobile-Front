import Header from './components/Header/Header';
import EmployeeProvider from './context/employees';
import SearchProvider from './context/search';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <EmployeeProvider>
      <SearchProvider>
        <Header />
        <HomePage />
      </SearchProvider>
    </EmployeeProvider>
  );
}

export default App;
