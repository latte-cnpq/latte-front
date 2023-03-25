import SearchInput from '../SearchInput';
import Select from '../Select';
import { Container, OptionContainer } from './styles';

export default function SearchBar({ params, data, setData, onClick }) {
  const handleInputChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleSelectChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  return (
    <Container>
      {params.map((query, index) => {
        if (query.type == 'input') {
          return (
            <OptionContainer key={index}>
              <SearchInput
                value={data[query.queryField]}
                onChange={(e) => handleInputChange(e, query.queryField)}
                onClick={onClick}
              />
            </OptionContainer>
          );
        }

        if (query.type == 'select') {
          return (
            <OptionContainer key={index}>
              <Select
                data={query.options}
                placeholder="Selecionar"
                selected={data[query.queryField]}
                setSelected={(value) => handleSelectChange(query.queryField, value)}
                defaultOption={query.options[0]}
              />
            </OptionContainer>
          );
        }
      })}
    </Container>
  );
}
