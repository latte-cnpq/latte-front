import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

export const TitleText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.highContrastText};
  font-size: 20px;
`;
