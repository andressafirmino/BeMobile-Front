import { ReactNode, createContext, useState } from 'react';

interface SearchContextProps {
  closeSearch: string;
  setCloseSearch: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps>({
  closeSearch: 'none',
  setCloseSearch: () => {},
  searchText: '',
  setSearchText: () => {},
});

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [closeSearch, setCloseSearch] = useState<string>('none');
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        closeSearch,
        setCloseSearch,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
