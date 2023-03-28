import { StyledButton } from './style';

export default function Button({ icon, children, onClick, selected, disabled = false }) {
  return (
    <StyledButton selected={selected} onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </StyledButton>
  );
}
