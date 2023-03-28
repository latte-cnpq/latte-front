import { useState } from 'react';
import { Row } from '../Row';
import Separator from '../Separator';
import { Container, HeaderRow, HeaderTitle, TBody } from './styles';

export default function Table({
  columns,
  data,
  isFetching,
  rowOptions,
  expandedData,
  expandable = false,
}) {
  const [selected, setSelected] = useState(false);

  const onClickHandler = (id) => {
    selected == id ? setSelected() : setSelected(id);
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
                  expandedData={expandedData}
                  columns={columns}
                  data={element}
                  expandable={expandable}
                />
              );
            })}
          </TBody>
        )}
      </Container>
    </>
  );
}
