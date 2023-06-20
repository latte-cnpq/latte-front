import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ExpandIcon = styled(ExpandMoreIcon)`
  transition: transform 250ms ease-in-out;

  transform: ${({ open }) => (open ? 'rotateZ(180deg)' : 'rotateZ(0deg)')};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 10px;
  gap: 10px;
  padding: 10px;
  opacity: 0;
  transition: opacity 250ms ease-in-out;

  :hover {
    opacity: 1;
  }
`;

export const TopMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
`;

export const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  color: white;
  font-size: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.highContrastText};
  text-decoration: none;
  color: white;
  font-size: 15px;
  padding: 5px 10px;
  height: 32px;
  width: 200px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: white;
`;

export const ExpansibleLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.hoveredElementBackground};
  }
`;

export const PlotMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlotMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;

  transition: max-height 500ms ease-in-out;
  max-height: ${({ open }) => (open ? '900px' : '0px')};
  overflow: hidden;
`;

export const PlotMenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ColorField = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.highContrastText};
  font-size: 15px;
  padding: 5px;
  height: 32px;
  width: 200px;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => `${color}`};
  }
`;
