import { useEffect, useState } from 'react';
import { Container, StyledButton, VerticalSeparator } from './styles';

const Pagination = ({ pages = 1, selected, setSelected }) => {
  const pagesArray = Array.from({ length: pages }, (_, index) => index + 1);

  const [isPrevDisabled, setIsPrevDisabled] = useState(selected === 0);
  const [isNextDisabled, setIsNextDisabled] = useState(selected === pages - 1);

  useEffect(() => {
    setIsPrevDisabled(selected === 0);
    setIsNextDisabled(selected === pages - 1);
  }, [selected, pages]);

  const handleClickPage = (page) => {
    setSelected(page);
  };

  const handleClickedPrev = () => {
    setSelected((prevSelected) => Math.max(prevSelected - 1, 0));
  };

  const handleClickedNext = () => {
    setSelected((prevSelected) => Math.min(prevSelected + 1, pages - 1));
  };

  return (
    <Container>
      <StyledButton disabled={isPrevDisabled} onClick={handleClickedPrev}>
        Anterior
      </StyledButton>
      {pagesArray.map((page, index) => {
        return (
          <div key={index}>
            <VerticalSeparator />
            <StyledButton
              selected={selected == index}
              onClick={() => {
                handleClickPage(index);
              }}
            >
              {page}
            </StyledButton>
            {index == pages - 1 && <VerticalSeparator />}
          </div>
        );
      })}
      <StyledButton disabled={isNextDisabled} onClick={handleClickedNext}>
        Próximo
      </StyledButton>
    </Container>
  );
};

export default Pagination;
