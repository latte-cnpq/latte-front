import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.colors.warning};
  }
`;

export const MessageContent = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Options = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.bordersAndSeparator};
`;

export const StyledButton = styled.button`
  text-decoration: none;
  border: none;
  height: 100%;
  color: ${({ theme }) => theme.colors.highContrastText};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  flex: 1;
  cursor: pointer;
  padding: 10px;

  :hover {
    background: ${({ confirm, theme }) => (confirm ? theme.colors.success : theme.colors.error)};
  }
`;
