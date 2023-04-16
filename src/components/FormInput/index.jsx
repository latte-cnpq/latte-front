import { forwardRef } from 'react';
import Input from '../Input';
import { Container, ErrorContainer, InputContainer } from './styles';

const FormInput = forwardRef(({ register, field, required, value, readOnly }, ref) => {
  return (
    <Container>
      <ErrorContainer>{required && <span>* Esse campo é necessário</span>}</ErrorContainer>
      <InputContainer>
        {field}
        <Input ref={ref} readOnly={readOnly} value={value} {...register} />
      </InputContainer>
    </Container>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
