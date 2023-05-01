import { forwardRef } from 'react';
import { InputContainer, StyledInput } from './styles';

const Input = forwardRef(({ readOnly, register, defaultValue, ...props }, ref) => {
  return (
    <InputContainer>
      <StyledInput
        ref={ref}
        readOnly={readOnly}
        defaultValue={defaultValue}
        {...register}
        {...props}
      />
    </InputContainer>
  );
});

Input.displayName = 'Input';

export default Input;
