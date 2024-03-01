import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const HeaderImage = styled.div`
  padding: 12.08px 0 0 32px;
  gap: 10px;
  display: flex;

  img {
    width: 44px;
    height: auto;
    max-height: 35px;
  }

  @media screen and (max-width: 375px) {
    padding: 12.08px 0 0 20px;
  }
`;
