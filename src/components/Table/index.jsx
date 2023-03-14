import useAxios from '@/hooks/useFetch';
import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import Separator from '../Separator';
import {
  ButtonContainer,
  Cell,
  Container,
  ContentContainer,
  HeaderRow,
  HeaderTitle,
  Input,
  InputContainer,
  InputField,
  InputRow,
  Row,
  TBody,
} from './styles';
export default function Table({
  columns,
  data,
  selected,
  setSelected,
  inserting,
  inputValue,
  onChange,
  reFetch,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModaldata] = useState();
  const [loading, setLoading] = useState(true);
  const { fetchData } = useAxios();

  const handleSelection = (e, key) => {
    if (key == selected) {
      handleEdit(e);
      return;
    }

    setSelected(key);
  };

  const handleEdit = (e) => {
    setLoading(true);
    if (e.detail == 2) {
      fetchData({
        method: 'get',
        url: `/Institute/${selected}`,
      })
        .then((res) => {
          setModaldata(res.data);
          setModalIsOpen(true);
          setLoading(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <Container>
      <Separator />
      <HeaderRow>
        {columns.map((column, index) => {
          return <HeaderTitle key={index}>{column.heading}</HeaderTitle>;
        })}
      </HeaderRow>
      <TBody>
        {data.map((element, index) => {
          return (
            <Row
              key={index}
              onClick={(e) => handleSelection(e, element.id)}
              selected={selected == element.id ? true : false}
            >
              {columns.map((column, index) => {
                return (
                  <Cell key={index} onClick={() => {}}>
                    {element[column.value]}
                  </Cell>
                );
              })}
            </Row>
          );
        })}
        {inserting && (
          <InputRow>
            {columns.map((column, index) => {
              return (
                <InputField
                  key={index}
                  value={inputValue[column.value]}
                  onChange={(e) => {
                    onChange({ ...inputValue, [column.value]: e.target.value });
                  }}
                />
              );
            })}
          </InputRow>
        )}
      </TBody>

      {!loading && (
        <HandleModal
          data={modalData}
          open={modalIsOpen}
          setOpen={setModalIsOpen}
          reFetch={reFetch}
        />
      )}
    </Container>
  );
}

const HandleModal = ({ data, open, setOpen, reFetch }) => {
  const [name, setName] = useState(data.name);
  const [acronym, setAcronym] = useState(data.acronym);

  const { fetchData } = useAxios();

  const handleUpdate = () => {
    fetchData({
      method: 'put',
      url: `/Institute/Update`,
      body: {
        id: data.id,
        name,
        acronym,
      },
    })
      .then(() => {
        setOpen(false);
        reFetch();
      })
      .catch(() => {
        alert('Ocorreu um erro ao salvar o Instituto, verifique os dados e tente novamente.');
      });
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <ContentContainer>
        <InputContainer>
          <Input required value={name} onChange={(e) => setName(e.target.value)} />
          <Input required value={acronym} onChange={(e) => setAcronym(e.target.value)} />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={handleUpdate}>Salvar</Button>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
        </ButtonContainer>
      </ContentContainer>
    </Modal>
  );
};
