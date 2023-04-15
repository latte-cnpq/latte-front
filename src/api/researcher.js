import { axios } from './axios';

const ENDPOINT = '/Researcher';

export const getResearchers = async () => {
  const { data } = await axios.get(`${ENDPOINT}/GetAll`);

  return data;
};

export const getResearcher = async (id) => {
  const { data } = await axios.get(`${ENDPOINT}/${id}`);

  return data;
};

export const searchResearcher = async (id) => {
  const { data } = await axios.get(`${ENDPOINT}/SearchResearcher/${id}`);

  return data;
};

export const deleteResearcher = async (id) => {
  const response = await axios.delete(`${ENDPOINT}/${id}`);

  return response;
};

export const addResearcher = async (researcherIdNumber, instituteId) => {
  const response = await axios.post(`${ENDPOINT}/Create`, {
    researcherIdNumber,
    instituteId,
  });

  return response;
};

export const executeFilterResearcher = async (searchData) => {
  const { data } = await axios.get(
    `${ENDPOINT}/ExecuteFilter?textSearch=${searchData.textSearch}&field=${searchData.field.value}`,
  );

  return data;
};

export const updateResearcher = async (
  id,
  name,
  email,
  researcheridNumber,
  resume,
  instituteID,
) => {
  const response = await axios.put(`${ENDPOINT}/Update`, {
    id,
    name,
    email,
    researcheridNumber,
    resume,
    instituteID,
  });

  return response;
};

export default getResearchers;
