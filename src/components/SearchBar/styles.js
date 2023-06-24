import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  gap: 30px;

  font-size: 1.1em;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.div`
  min-width: 100px;
`;
