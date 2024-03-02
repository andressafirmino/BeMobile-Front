import { styled } from 'styled-components';

export const TableRowContainer = styled.div`
  width: calc(100vw - 64px);
  height: 49px;
  background: #ffffff;
  box-shadow: 0px 1px 2px 0px #00000033;
  border-radius: 8px 8px 0px 0px;
  padding-left: 32px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #1c1c1c;
`;
export const Photo = styled.div`
  width: 13%;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
  @media screen and (max-width: 855px) {
    width: 38%;
  }
`;
export const Name = styled.div`
  width: 25%;

  @media screen and (max-width: 855px) {
    width: 46%;
  }
`;
export const Display = styled.div`
  width: 62%;
  display: flex;

  @media screen and (max-width: 855px) {
    flex-direction: column;
    width: 0;
    display: none;
  }
`;
export const Position = styled.div`
  width: 29%;

  @media screen and (max-width: 855px) {
    width: calc(100vw - 64px);
  }
`;
export const Date = styled.div`
  width: 34%;

  @media screen and (max-width: 855px) {
    width: calc(100vw - 64px);
  }
`;
export const Phone = styled.div`
  width: 32%;

  @media screen and (max-width: 855px) {
    width: calc(100vw - 64px);
  }
`;
export const Icon = styled.div`
  font-size: 25px;
  color: #594ed2;
`;
