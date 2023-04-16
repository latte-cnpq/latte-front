import Button from '../Button';
import Input from '../Input';
import { Container, OptionContainer } from './styles';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ params, data, setData, onClick }) {
  const handleInputChange = (e, field) => {
    setData((prevState) => ({ ...prevState, [field]: e.target.value }));
  };

  return (
    <Container>
      {params.map((query, index) => {
        if (query.type == 'input') {
          return (
            <OptionContainer key={index}>
              {query.placeholder}
              <Input
                value={data[query.queryField]}
                onChange={(e) => handleInputChange(e, query.queryField)}
                placeholder={query.placeholder}
              />
            </OptionContainer>
          );
        }
      })}
      <Button icon={<SearchIcon fontSize="small" />} onClick={onClick}>
        Pesquisar
      </Button>
    </Container>
  );
}
