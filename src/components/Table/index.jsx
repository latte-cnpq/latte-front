import { useState } from 'react';
import Separator from '../Separator';
import { Cell, Container, HeaderRow, HeaderTitle, TBody } from './styles';
import { Row } from '../Row';

export default function Table({ columns, data, isFetching, rowOptions }) {
  const [selected, setSelected] = useState();

  const onClickHandler = (id) => {
    setSelected(id);
  };

  return (
    <>
      <Container>
        <Separator />
        <HeaderRow>
          {columns.map((column, index) => {
            return <HeaderTitle key={index}>{column.heading}</HeaderTitle>;
          })}
        </HeaderRow>
        {!isFetching && (
          <TBody>
            {data.map((element, index) => {
              return (
                <Row
                  key={index}
                  onClick={() => onClickHandler(element.id)}
                  options={rowOptions}
                  id={element.id}
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
          </TBody>
        )}
      </Container>
    </>
  );
}
