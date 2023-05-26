import { axios } from './axios';

const ENDPOINT = '/data';

export const getRecords = async () => {
  const { data } = await axios.get(`${ENDPOINT}/counters`);

  return data;
};

export const getProductionRecords = async () => {
  const { data } = await axios.get(`${ENDPOINT}/circles`);

  return data;
};

export const getCountByYear = async () => {
  const { data } = await axios.get(`${ENDPOINT}/columns`);

  return data;
};

export const getCountByFilter = async (startYear, endYear, researcherName, instituteName) => {
  const { data } = await axios.get(
    `${ENDPOINT}/columns/getProductionsByFilter` +
      `?startYear=${startYear}` +
      `&endYear=${endYear}` +
      `&researcherName=${researcherName}` +
      `&instituteName=${instituteName}`,
  );

  return data;
};
