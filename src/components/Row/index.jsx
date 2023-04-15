import { Details } from '../Details';
import {
  Cell,
  Container,
  Content,
  ExpandedContainer,
  Expansion,
  Option,
  Options,
  RowContainer,
} from './styles';

export const Row = ({
  selected,
  columns,
  data,
  options,
  id,
  onClick,
  expandedData,
  expandable,
}) => {
  return (
    <Container>
      <RowContainer selected={selected}>
        <Content onClick={onClick}>
          {columns.map((column, index) => {
            return (
              <Cell key={index} onClick={() => {}}>
                {data[column.value]}
              </Cell>
            );
          })}
        </Content>
        <Options>
          {options.map((option, index) => [
            <Option
              key={index}
              onClick={() => {
                option.fn(id);
              }}
            >
              {option.icon}
            </Option>,
          ])}
        </Options>
      </RowContainer>
      {expandable && (
        <Expansion height={'300px'} selected={selected}>
          <ExpandedContainer height={'300px'}>
            {expandedData.map((content, index) => {
              return <Details key={index} title={content.title} content={data[content.content]} />;
            })}
          </ExpandedContainer>
        </Expansion>
      )}
    </Container>
  );
};
