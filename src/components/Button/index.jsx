import { StyledButton } from './style';

export default function Button({
  icon,
  children,
  onClick,
  selected,
  round = true,
  disabled = false,
}) {
  return (
    <StyledButton selected={selected} onClick={onClick} disabled={disabled} round={round}>
      {icon}
      {children}
    </StyledButton>
  );
}
