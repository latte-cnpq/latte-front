import { useEffect, useState } from 'react';
import { Container, TitleText } from './styles';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductionsDoughnut = ({ rawData }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(Object.values(rawData));
  }, [rawData]);

  const theme = useTheme();
  const options = {
    responsive: true,
    maintainaspectratio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.colors.highContrastText,
        },
      },
    },
  };

  const data = {
    labels: ['Livros', 'Artigos'],
    datasets: [
      {
        label: 'Cadastrados',
        data: values,
        backgroundColor: ['#0090FF', '#30A46C'],
        borderColor: ['#164430', '#0D3868'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <TitleText>Overview</TitleText>
      <Doughnut data={data} options={options} />
    </Container>
  );
};

export default ProductionsDoughnut;
