import styled from 'styled-components';
import SearchSvg from './search.svg';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
  min-width: 150px;
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.highContrastText};
`;

export const IconButton = styled.button`
  background: none;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  :hover {
    background-color: ${({ theme }) => theme.colors.hoveredElementBackground};
  }
`;

export const SearchIcon = styled(SearchSvg)`
  width: 25px;
  height: auto;
`;
