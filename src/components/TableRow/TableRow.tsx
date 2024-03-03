import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useState } from 'react';
import Logo from '../../assets/Header.svg';
import useWindowsResize from '../../hooks/useWindowsResize';
import { EmployeeDataType } from '../../protocols';
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

export default function TableRow({ name, job, admission_date, phone }: EmployeeDataType) {
  const { width } = useWindowsResize();
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <Container>
      <TableRowContainer>
        <Photo>
          <img src={Logo} />
        </Photo>
        <Name>{name}</Name>
        {width && width > 855 && (
          <Display>
            <Position>{job}</Position>
            <Date>{admission_date}</Date>
            <Phone>{phone}</Phone>
          </Display>
        )}
        {width && width < 855 && !selected && (
          <Icon onClick={() => setSelected(true)}>
            <SlArrowDown />
          </Icon>
        )}
        {width && width < 855 && selected && (
          <Icon onClick={() => setSelected(false)}>
            <SlArrowUp />
          </Icon>
        )}
      </TableRowContainer>
      <HiddenBarContainer>
        <HiddenBar>
          <Title>Cargo</Title>
          <Subtitle>{job}</Subtitle>
        </HiddenBar>
        <HiddenBar>
          <Title>Data de admissão</Title>
          <Subtitle>{admission_date}</Subtitle>
        </HiddenBar>
        <HiddenBar>
          <Title>Telefone</Title>
          <Subtitle>{phone}</Subtitle>
        </HiddenBar>
      </HiddenBarContainer>
    </Container>
  );
}
