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

  const getPageNumbersToShow = () => {
    const visiblePages = 15;
    const totalPages = pagesArray.length;
    const currentIndex = selected;
    const firstIndex = Math.max(0, currentIndex - Math.floor(visiblePages / 2));
    const lastIndex = Math.min(firstIndex + visiblePages - 1, totalPages - 1);

    if (lastIndex - firstIndex < visiblePages - 1) {
      const diff = visiblePages - (lastIndex - firstIndex + 1);
      if (firstIndex > 0) {
        const offset = Math.min(firstIndex, diff);
        return pagesArray.slice(firstIndex - offset, lastIndex + 1);
      } else {
        const offset = Math.min(totalPages - lastIndex - 1, diff);
        return pagesArray.slice(firstIndex, lastIndex + 1 + offset);
      }
    }

    return pagesArray.slice(firstIndex, lastIndex + 1);
  };

  const renderedPages = getPageNumbersToShow();

  return (
    <Container>
      <StyledButton disabled={isPrevDisabled} onClick={handleClickedPrev}>
        Anterior
      </StyledButton>
      {renderedPages.map((page, index) => {
        return (
          <div key={index}>
            <VerticalSeparator />
            <StyledButton
              selected={selected === page - 1}
              onClick={() => {
                handleClickPage(page - 1);
              }}
            >
              {page}
            </StyledButton>
            {index === renderedPages.length - 1 && selected + 1 < pages && <span>...</span>}
            {index === renderedPages.length - 1 && selected + 1 === pages && <VerticalSeparator />}
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
