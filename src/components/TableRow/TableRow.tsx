import { SlArrowDown } from 'react-icons/sl';
import Logo from '../../assets/Header.svg';
import useWindowsResize from '../../hooks/useWindowsResize';
import { Date, Display, Icon, Name, Phone, Photo, Position, TableRowContainer } from './style';

export default function TableRow() {
  const { width } = useWindowsResize();

  return (
    <TableRowContainer>
      <Photo>
        <img src={Logo} />
      </Photo>
      <Name>Andressa</Name>
      {width && width > 855 ? (
        <Display>
          <Position>FullStack</Position>
          <Date>00/00/0000</Date>
          <Phone>+00 (00) 00000-0000</Phone>
        </Display>
      ) : (
        <Icon>
          <SlArrowDown />
        </Icon>
      )}
    </TableRowContainer>
  );
}
