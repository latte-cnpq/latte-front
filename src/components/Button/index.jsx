import { StyledButton } from './style';

export default function Button({ icon, children, onClick, selected }) {
  return (
    <StyledButton selected={selected} onClick={onClick}>
      {icon}
      {children}
    </StyledButton>
  );
}
