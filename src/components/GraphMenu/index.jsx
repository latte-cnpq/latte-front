import { useEffect, useState } from 'react';
import {
  BottomMenu,
  ColorField,
  Container,
  ExpandIcon,
  ExpansibleLabel,
  Input,
  InputContainer,
  PlotMenu,
  PlotMenuColumn,
  Separator,
  TopMenu,
} from './styles';

import GraphMenuSelect from '../GraphMenuSelect';

import * as instituteApi from '@/api/institute';
import * as researcherApi from '@/api/researcher';
import GraphMenuMultiselect from '../GraphMenuMultiselect';

const GraphMenu = ({ searchData, setSearchData, colors, thresholds, setThresholds }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [institutes, setInstitutes] = useState([]);

  const fetchInstitutes = async () => {
    const data = await instituteApi.getInstitutes();
    setInstitutes(
      data.map((option) => ({
        value: option.name,
        label: option.acronym,
      })),
    );
  };

  const [researchers, setResearchers] = useState([]);

  const fetchResearchers = async () => {
    const data = await researcherApi.getResearchersByInstitutes(
      searchData.institutes.map(({ label }) => label),
    );

    setResearchers(
      data.map((option) => ({
        value: option.id,
        label: option.name,
      })),
    );
  };

  const handleSelectResearcher = (option) => {
    setSearchData((prevData) => ({ ...prevData, researchers: option }));
  };

  const productions = [
    {
      value: '',
      label: 'Todos',
    },
    {
      value: 'BOOK',
      label: 'Livros',
    },
    {
      value: 'ARTICLE',
      label: 'Artigos',
    },
  ];

  const handleSelectProduction = (option) => {
    setSearchData((prevData) => ({ ...prevData, production: option }));
  };

  const vertice = [
    {
      value: 'researcher',
      label: 'Pesquisador',
    },
    {
      value: 'institute',
      label: 'Instituto',
    },
  ];

  const handleSelectInstitute = (option) => {
    setSearchData((prevData) => ({ ...prevData, institutes: option, researchers: [] }));
  };

  const handleSelectVertice = (option) => {
    setSearchData((prevData) => ({ ...prevData, node: option }));
  };

  useEffect(() => {
    fetchInstitutes();
    fetchResearchers();
  }, [searchData]);

  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleChangeLowerLimit = (value) => {
    setThresholds((prevState) => ({ ...prevState, lowerLimit: value }));
  };

  const handleChangeUpperLimit = (value) => {
    setThresholds((prevState) => ({ ...prevState, upperLimit: value }));
  };

  return (
    <Container>
      <TopMenu>
        <InputContainer>
          <GraphMenuMultiselect
            id="institute-select"
            label="Instituto"
            options={institutes}
            value={searchData.institutes}
            onChange={handleSelectInstitute}
            placeholder="Todos"
            allowClear={false}
            allowSearch
            allowSort
          />
        </InputContainer>
        <InputContainer>
          <GraphMenuSelect
            id="institute-select"
            label="Produção"
            options={productions}
            value={searchData.production}
            onChange={handleSelectProduction}
            allowClear={false}
            allowSearch={false}
            allowSort={false}
          />
        </InputContainer>
        <InputContainer>
          <GraphMenuMultiselect
            id="institute-select"
            label="Pesquisador"
            options={researchers}
            value={searchData.researchers}
            onChange={handleSelectResearcher}
            placeholder="Todos"
            allowClear={false}
            allowSearch
            allowSort
          />
        </InputContainer>
        <InputContainer>
          <GraphMenuSelect
            id="institute-select"
            label="Tipo Vértice"
            options={vertice}
            value={searchData.node}
            onChange={handleSelectVertice}
            allowClear={false}
            allowSearch={false}
            allowSort={false}
          />
        </InputContainer>
      </TopMenu>
      <Separator />
      <BottomMenu>
        <ExpansibleLabel onClick={handleIsOpen}>
          Regras de Plotagem
          <ExpandIcon open={isOpen} fontSize="small" />
        </ExpansibleLabel>
        <PlotMenu open={isOpen}>
          <PlotMenuColumn>
            Vértice (cor)
            <ColorField color={colors.firstColor} />
            <ColorField color={colors.secondColor} />
            <ColorField color={colors.thirdColor} />
          </PlotMenuColumn>
          <PlotMenuColumn>
            Valor NP (inicio)
            <Input type="number" disabled={true} value={1} />
            <Input
              type="number"
              onChange={(e) => handleChangeLowerLimit(e.target.value)}
              value={thresholds.lowerLimit}
            />
            <Input
              type="number"
              onChange={(e) => handleChangeUpperLimit(e.target.value)}
              value={thresholds.upperLimit}
            />
          </PlotMenuColumn>
          <PlotMenuColumn>
            Valor NP (fim)
            <Input value={thresholds.lowerLimit ? thresholds.lowerLimit - 1 : ''} disabled={true} />
            <Input value={thresholds.upperLimit ? thresholds.upperLimit - 1 : ''} disabled={true} />
            <Input value="&infin;" disabled={true} />
          </PlotMenuColumn>
        </PlotMenu>
      </BottomMenu>
    </Container>
  );
};

export default GraphMenu;
