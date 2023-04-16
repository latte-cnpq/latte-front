import { useState } from 'react';
import { Row } from '../Row';
import Separator from '../Separator';
import { Container, HeaderRow, HeaderTitle, TBody } from './styles';

export default function Table({ columns, data, rowOptions, expandedData, expandable = false }) {
  const [selected, setSelected] = useState();

  const onClickHandler = (index) => {
    selected == index ? setSelected() : setSelected(index);
  };

  return (
    <>
      <Container>
        <Separator />
        <HeaderRow>
          {columns.map((column, index) => (
            <HeaderTitle key={index}>{column.heading}</HeaderTitle>
          ))}
        </HeaderRow>
        <TBody>
          {data.map((element, index) => (
            <Row
              key={index}
              onClick={() => onClickHandler(index)}
              options={rowOptions}
              id={element.id}
              selected={selected == index ? true : false}
              expandedData={expandedData}
              columns={columns}
              data={element}
              expandable={expandable}
            />
          ))}
        </TBody>
      </Container>
    </>
  );
}
