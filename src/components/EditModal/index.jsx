import { useEffect, useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { Container, Content, Input, InputContainer, InputLabel, Options } from './styles';

export const EditModal = ({ columns, data, modalTitle, open, setOpen, onSave }) => {
  const [inputStates, setInputStates] = useState(
    columns.reduce((obj, column) => {
      obj[column.value] = '';
      return obj;
    }, {}),
  );

  useEffect(() => {
    if (data) {
      setInputStates({ ...data });
    }
  }, [data]);

  const handleSave = () => {
    onSave(inputStates);
    setOpen(false);
  };

  return (
    <Modal title={modalTitle} open={open} setOpen={setOpen}>
      {data && (
        <Container>
          <Content>
            {columns.map((element, index) => {
              return (
                <InputContainer key={index}>
                  <InputLabel>{element.heading}</InputLabel>
                  <Input
                    value={inputStates[element.value]}
                    onChange={(e) =>
                      setInputStates({ ...inputStates, [element.value]: e.target.value })
                    }
                  />
                </InputContainer>
              );
            })}
          </Content>
          <Options>
            <Button onClick={handleSave}>Salvar</Button>
          </Options>
        </Container>
      )}
    </Modal>
  );
};
