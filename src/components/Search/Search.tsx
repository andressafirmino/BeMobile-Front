import { SearchContainer, SearchIcon, SearchInput, SearchInputBox, Title } from './style';

export default function SearchBox() {
  return (
    <SearchContainer>
      <Title>Funcionários</Title>
      <SearchInputBox>
        <SearchInput placeholder="Pesquisar" />
        <SearchIcon></SearchIcon>
      </SearchInputBox>
    </SearchContainer>
  );
}
