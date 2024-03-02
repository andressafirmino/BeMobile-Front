import { Date, Display, Name, Phone, Photo, Position, TableHeaderContainer } from './style';

export default function TableHeader() {
  return (
    <TableHeaderContainer>
      <Photo>FOTO</Photo>
      <Name>NOME</Name>
      <Display>
        <Position>CARGO</Position>
        <Date>DATA DE ADMISSÃO</Date>
        <Phone>TELEFONE</Phone>
      </Display>
    </TableHeaderContainer>
  );
}
