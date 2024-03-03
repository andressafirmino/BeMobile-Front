import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';

export const SearchContainer = styled.div`
  width: calc(100vw - 64px);
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
  }

  @media screen and (max-width: 375px) {
    width: calc(100vw - 40px);
    top: 80px;
    left: 20px;
  }
`;
export const Title = styled.div`
  width: 139px;
  height: 28px;
  color: #1c1c1c;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.13px;

  @media screen and (max-width: 600px) {
    margin: 10px 0 28px;
  }
`;
export const SearchInputBox = styled.div`
  position: relative;
`;
export const SearchInput = styled.input`
  width: 287px;
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  padding: 12px 16px;
  outline: none;

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    color: #9e9e9e;
  }
  @media screen and (min-width: 1024px) {
    width: 28vw;
  }
  @media screen and (max-width: 600px) {
    width: calc(100vw - 64px);
  }

  @media screen and (max-width: 375px) {
    width: calc(100vw - 40px);
  }
`;
export const SearchIcon = styled(IoMdSearch)`
  font-size: 17.49px;
  color: #dfdfdf;
  position: absolute;
  right: 16px;
  top: 15px;
  cursor: pointer;
`;
