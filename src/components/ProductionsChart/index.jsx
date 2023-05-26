import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { ChartContainer, TitleText } from './styles';

import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductionsChart = ({ rawData, onClick }) => {
  const theme = useTheme();
  const [years, setYears] = useState([]);
  const [books, setBooks] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setYears(
      rawData.map((item) => {
        return item.year;
      }),
    );

    setBooks(
      rawData.map((item) => {
        return item.totalBooks;
      }),
    );

    setArticles(
      rawData.map((item) => {
        return item.totalArticles;
      }),
    );
  }, [rawData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.colors.highContrastText,
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: theme.colors.bordersAndSeparator,
          display: false,
        },
        ticks: {
          color: theme.colors.lowContrastText,
          fontSize: 15,
          stepSize: 1,
          beginAtZero: true,
        },
        border: {
          color: theme.colors.bordersAndSeparator,
          width: 2,
        },
      },
      x: {
        grid: {
          color: theme.colors.bordersAndSeparator,
          display: false,
        },
        ticks: {
          color: theme.colors.lowContrastText,
          fontSize: 15,
          stepSize: 1,
          beginAtZero: true,
        },
        border: {
          color: theme.colors.bordersAndSeparator,
          width: 2,
        },
      },
    },
  };

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Livros',
        data: books,
        backgroundColor: '#0090FF',
      },
      {
        label: 'Artigos',
        data: articles,
        backgroundColor: '#30A46C',
      },
    ],
  };

  const chartRef = useRef();

  return (
    <ChartContainer>
      <TitleText>Produções</TitleText>
      <Bar
        ref={chartRef}
        options={options}
        data={data}
        onClick={(event) => onClick(event, chartRef, data)}
      />
    </ChartContainer>
  );
};

export default ProductionsChart;
