import { useEffect, useState } from 'react';
import { Input } from '../Input';
import Modal from '../Modal';
import { Container, Content } from './styles';
import SaveIcon from '@mui/icons-material/Save';

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

  const modalOptions = [
    {
      option: 'Salvar',
      icon: <SaveIcon fontSize="small" />,
      fn: handleSave,
      active: false,
    },
  ];

  return (
    <Modal title={modalTitle} open={open} setOpen={setOpen} options={modalOptions}>
      <Container>
        <Content>
          {columns.map((element, index) => {
            return (
              <Input
                key={index}
                label={element.heading}
                value={inputStates[element.value]}
                onChange={(e) =>
                  setInputStates({ ...inputStates, [element.value]: e.target.value })
                }
              />
            );
          })}
        </Content>
      </Container>
    </Modal>
  );
};
