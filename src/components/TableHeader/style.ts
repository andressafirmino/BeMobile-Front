import { styled } from 'styled-components';
import { GoDotFill } from 'react-icons/go';

export const TableHeaderContainer = styled.div`
  width: calc(100vw - 64px);
  height: 47px;
  background: linear-gradient(to bottom, #5a84c0, #594ed2);
  border-radius: 8px 8px 0px 0px;
  padding-left: 32px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;
export const Photo = styled.div`
  width: 13%;
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
export const Dot = styled(GoDotFill)`
  font-size: 8px;
`;
