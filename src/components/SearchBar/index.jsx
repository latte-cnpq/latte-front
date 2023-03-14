import SearchInput from '../SearchInput';
import Select from '../Select';
import { Container, OptionContainer } from './styles';

export default function SearchBar({ data, field, setField, term, setTerm, onClick }) {
  return (
    <Container>
      <OptionContainer>
        Termo
        <SearchInput value={term} onChange={(e) => setTerm(e.target.value)} onClick={onClick} />
      </OptionContainer>
      <OptionContainer>
        Campo
        <Select label="Selecionar" data={data} selected={field} setSelected={setField} />
      </OptionContainer>
    </Container>
  );
}
