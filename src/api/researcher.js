import { axios } from './axios';

const ENDPOINT = '/researcher';

export const getResearchers = async () => {
  const { data } = await axios.get(`${ENDPOINT}`);

  return data;
};

export const getResearcher = async (id) => {
  const { data } = await axios.get(`${ENDPOINT}/${id}`);

  return data;
};

export const searchResearcher = async (id) => {
  const { data } = await axios.get(`${ENDPOINT}/cache/${id}`);
  return data;
};

export const deleteResearcher = async (id) => {
  console.log(id);
  const response = await axios.delete(`${ENDPOINT}/${id}`);
  return response;
};

export const addResearcher = async (researcherIdNumber, instituteId) => {
  const response = await axios.post(`${ENDPOINT}`, {
    researcherIdNumber,
    instituteId,
  });

  return response;
};

export const advancedSearch = async (name, acronym, page, perPage = 10) => {
  const { data } = await axios.get(
    `${ENDPOINT}/advancedsearch?name=${name}&acronym=${acronym}&page=${page}&perPage=${perPage}&ordination=id&direction=ASC`,
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
