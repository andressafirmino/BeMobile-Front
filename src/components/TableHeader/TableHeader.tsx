import useWindowsResize from '../../hooks/useWindowsResize';
import { Date, Display, Name, Phone, Photo, Position, TableHeaderContainer } from './style';

export default function TableHeader() {
  const { width } = useWindowsResize();
  console.log(width);
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
