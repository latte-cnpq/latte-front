import { useState } from 'react';
import SearchInput from '../SearchInput';
import Select from '../Select';
import { Container, OptionContainer } from './styles';

export default function SearchBar() {
  let data = [
    { id: 1, name: 'Nome', default: false },
    { id: 2, name: 'Acrônimo', default: false },
    { id: 3, name: 'Todos', default: true },
  ];

  const [term, setTerm] = useState('');
  const [field, setField] = useState(data.find((x) => x.default == true));

  return (
    <Container>
      <OptionContainer>
        Termo
        <SearchInput value={term} onChange={(e) => setTerm(e.target.value)} />
      </OptionContainer>
      <OptionContainer>
        Campo
        <Select label="Selecionar" data={data} selected={field} setSelected={setField} />
      </OptionContainer>
    </Container>
  );
}
