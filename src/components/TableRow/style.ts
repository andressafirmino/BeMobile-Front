import { styled } from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 64px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px 0px #00000033;
  background: #ffffff;
  border-bottom: 0.5px solid #dfdfdf;
  @media screen and (max-width: 375px) {
    width: calc(100vw - 40px);
  }
`;
export const TableRowContainer = styled.div`
  width: calc(100vw - 64px);
  height: 49px;
  border-radius: 8px 8px 0px 0px;
  padding-left: 32px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #1c1c1c;
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

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
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
  @media screen and (max-width: 600px) {
    width: calc(100vw - 168px);
  }
`;
export const Display = styled.div`
  width: 62%;
  display: flex;
  @media screen and (max-width: 855px) {
    flex-direction: column;
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
  width: 70px;
  font-size: 25px;
  color: #594ed2;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const HiddenBarContainer = styled.div`
  width: calc(100vw - 64px);
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
`;
export const HiddenBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: relative;
  p {
    font-size: 16px;
    color: #1c1c1c;
  }
  &:after {
    width: calc(100% - 64px);
    border-bottom: 1px dashed #dfdfdf;
    content: '';
    position: absolute;
    bottom: 0;
    left: 32px;
    @media screen and (max-width: 600px) {
      width: calc(100% - 40px);
      left: 20px;
    }
    @media screen and (max-width: 375px) {
      width: calc(100% - 24px);
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 375px) {
    padding: 0 0 0 16px;
  }
`;
export const Title = styled.p`
  font-weight: 500;
`;
export const Subtitle = styled.p`
  font-weight: 400;
`;
