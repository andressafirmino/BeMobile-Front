import { GoDotFill } from 'react-icons/go';
import useWindowsResize from '../../hooks/useWindowsResize';
import { Date, Display, Name, Phone, Photo, Position, TableHeaderContainer } from './style';

export default function TableHeader() {
  const { width } = useWindowsResize();

  return (
    <TableHeaderContainer>
      <Photo>FOTO</Photo>
      <Name>NOME</Name>
      {width && width > 855 ? (
        <Display>
          <Position>CARGO</Position>
          <Date>DATA DE ADMISSÃO</Date>
          <Phone>TELEFONE</Phone>
        </Display>
      ) : (
        <GoDotFill />
      )}
    </TableHeaderContainer>
  );
}
