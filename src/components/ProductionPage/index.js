import { useState } from 'react';
import Select from '../Select';
import Table from '../Table';
import { Container, LabelSelect } from './style';

const ProductionPage = () => {
  const [select, setSelect] = useState();
  const options = [
    { label: 'A', value: 'ALL' },
    { label: 'B', value: 'NAME' },
    { label: 'C', value: 'ACRONYM' },
  ];

  const [selectResearcher, setSelectResearcher] = useState();
  const optionsResearcher = [
    { label: 'A', value: 'ALL' },
    { label: 'B', value: 'NAME' },
    { label: 'C', value: 'ACRONYM' },
  ];
  const [selectType, setSelectType] = useState();
  const optionsType = [
    { label: 'A', value: 'ALL' },
    { label: 'B', value: 'NAME' },
    { label: 'C', value: 'ACRONYM' },
  ];
  const data = [{ type: 'opção1', details: 'opção2' }];
  const tableColumns = [
    { heading: 'Tipo', value: 'type' },
    { heading: 'Detalhamento', value: 'details' },
  ];

  return (
    <Container>
      <LabelSelect>
        Instituto
        <Select
          data={options}
          selected={select}
          setSelected={setSelect}
          placeholder={'Selecionar'}
        />
      </LabelSelect>

      <LabelSelect>
        Pesquisador
        <Select
          data={optionsResearcher}
          selected={selectResearcher}
          setSelected={setSelectResearcher}
          placeholder={'Selecionar'}
        />
      </LabelSelect>

      <LabelSelect>
        Tipo Prod.
        <Select
          data={optionsType}
          selected={selectType}
          setSelected={setSelectType}
          placeholder={'Selecionar'}
        />
      </LabelSelect>
      <Table>
        columns={tableColumns}
        data={data}
      </Table>
    </Container>
  );
};

export default ProductionPage;
