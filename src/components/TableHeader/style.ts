import { styled } from 'styled-components';

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
  @media screen and (max-width: 855px) {
    padding: 0 12px 0 0;
  }
  @media screen and (max-width: 375px) {
    width: calc(100vw - 40px);
    padding: 0;
  }
`;
export const Photo = styled.div`
  width: 13%;
  @media screen and (max-width: 855px) {
    width: 98px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    width: 74px;
  }
`;
export const Name = styled.div`
  width: 25%;
  @media screen and (max-width: 855px) {
    width: calc(100vw - 180px);
    display: flex;
    justify-content: center;
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
`;
export const Date = styled.div`
  width: 34%;
`;
export const Phone = styled.div`
  width: 32%;
`;
export const Icon = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
`;
