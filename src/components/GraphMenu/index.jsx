import { useEffect, useState } from 'react';
import {
  BottomMenu,
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
import ColorSelect from '../ColorSelect';

const GraphMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [institutes, setInstitutes] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  const fetchInstitutes = async () => {
    const data = await instituteApi.getInstitutes();
    setInstitutes(
      data.map((option) => ({
        value: option.id,
        label: option.acronym,
      })),
    );
  };

  const handleSelectInstitute = (option) => {
    setSelectedInstitute(option);
  };

  const [researchers, setResearchers] = useState([]);
  const [selectedResearcher, setSelectedResearcher] = useState(null);

  const fetchResearchers = async () => {
    const data = await researcherApi.getResearchers();
    setResearchers(
      data.map((option) => ({
        value: option.id,
        label: option.name,
      })),
    );
  };

  const handleSelectResearcher = (option) => {
    setSelectedResearcher(option);
  };

  const productions = [
    {
      value: 'books',
      label: 'Livros',
    },
    {
      value: 'articles',
      label: 'Artigos',
    },
  ];
  const [selectedProduction, setSelectedProduction] = useState(null);

  const handleSelectProduction = (option) => {
    setSelectedProduction(option);
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
  const [selectedVertice, setSelectedVertice] = useState(null);

  const handleSelectVertice = (option) => {
    setSelectedVertice(option);
  };

  const [selectedColors, setSelectedColors] = useState({
    color1: '',
    color2: '',
    color3: '',
    color4: '',
    color5: '',
  });

  const handleSelectColors = (colorIndex, option) => {
    console.log(option);
    setSelectedColors((colors) => ({ ...colors, [colorIndex]: option }));
    console.log(selectedColors);
  };

  useEffect(() => {
    fetchInstitutes();
    fetchResearchers();
  }, []);

  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [lowerLimit, setLowerLimit] = useState('');
  const handleChangeLowerLimit = (value) => {
    setLowerLimit(value);
  };

  const [upperLimit, setUpperLimit] = useState('');
  const handleChangeUpperLimit = (value) => {
    setUpperLimit(value);
  };

  return (
    <Container>
      <TopMenu>
        <InputContainer>
          <GraphMenuSelect
            id="institute-select"
            label="Instituto"
            options={institutes}
            value={selectedInstitute}
            onChange={handleSelectInstitute}
            placeholder="Todos"
            allowClear
            allowSearch
            allowSort
          />
        </InputContainer>
        <InputContainer>
          <GraphMenuSelect
            id="institute-select"
            label="Produção"
            options={productions}
            value={selectedProduction}
            onChange={handleSelectProduction}
            placeholder="Todos"
            allowClear
            allowSearch={false}
            allowSort={false}
          />
        </InputContainer>
        <InputContainer>
          <GraphMenuSelect
            id="institute-select"
            label="Pesquisador"
            options={researchers}
            value={selectedResearcher}
            onChange={handleSelectResearcher}
            placeholder="Todos"
            allowClear
            allowSearch
            allowSort
          />
        </InputContainer>
        <InputContainer>
          <GraphMenuSelect
            id="institute-select"
            label="Tipo Vértice"
            options={vertice}
            value={selectedVertice}
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
            <ColorSelect
              value={selectedColors.color1}
              onChange={(option) => {
                handleSelectColors('color1', option);
              }}
            />
            <ColorSelect
              value={selectedColors.color2}
              onChange={(option) => {
                handleSelectColors('color2', option);
              }}
            />
            <ColorSelect
              value={selectedColors.color3}
              onChange={(option) => {
                handleSelectColors('color3', option);
              }}
            />            
          </PlotMenuColumn>
          <PlotMenuColumn>
            Valor NP (inicio)
            <Input type="number" disabled= {true} value = {1} />
            <Input type="number" onChange={e=> handleChangeLowerLimit(e.target.value)}/>
            <Input type="number" onChange={e=> handleChangeUpperLimit(e.target.value)}/>
          </PlotMenuColumn>
          <PlotMenuColumn>
            Valor NP (fim)
            <Input value= {lowerLimit ? lowerLimit-1 : ''}  disabled={true} />
            <Input value= {upperLimit ? upperLimit-1 : ''}  disabled={true}/>
            <Input value= '&infin;'  disabled={true}/>
          </PlotMenuColumn>
        </PlotMenu>
      </BottomMenu>
    </Container>
  );
};

export default GraphMenu;
