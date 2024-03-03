import { SlArrowDown } from 'react-icons/sl';
import Logo from '../../assets/Header.svg';
import useWindowsResize from '../../hooks/useWindowsResize';
import {
  Container,
  Date,
  Display,
  HiddenBar,
  HiddenBarContainer,
  Icon,
  Name,
  Phone,
  Photo,
  Position,
  Subtitle,
  TableRowContainer,
  Title,
} from './style';

export default function TableRow() {
  const { width } = useWindowsResize();

  return (
    <Container>
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
      <HiddenBarContainer>
        <HiddenBar>
          <Title>Cargo</Title>
          <Subtitle>FullStack</Subtitle>
        </HiddenBar>
        <HiddenBar>
          <Title>Data de admissão</Title>
          <Subtitle>00/00/0000</Subtitle>
        </HiddenBar>
        <HiddenBar>
          <Title>Telefone</Title>
          <Subtitle>+00 (00) 00000-0000</Subtitle>
        </HiddenBar>
      </HiddenBarContainer>
    </Container>
  );
}
