import Logo from '../../assets/Header.svg';
import { HeaderContainer, HeaderImage } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderImage>
        <img src={Logo} />
      </HeaderImage>
    </HeaderContainer>
  );
}
