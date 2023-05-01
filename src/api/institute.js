import { axios } from './axios';

const ENDPOINT = '/institute';

export const addInstitute = async (name, acronym) => {
  const response = await axios.post(`${ENDPOINT}`, {
    name,
    acronym,
  });

  return response;
};

export const getInstitutes = async () => {
  const { data } = await axios.get(`${ENDPOINT}`);
  return data;
};

export const getInstitute = async (id) => {
  const { data } = await axios.get(`${ENDPOINT}/${id}`);
  return data;
};

export const deleteInstitute = async (id) => {
  const response = await axios.delete(`${ENDPOINT}/${id}`);
  return response;
};

export const advancedSearch = async (name, acronym, page, perPage = 10) => {
  const { data } = await axios.get(
    `${ENDPOINT}/advancedsearch?name=${name}&acronym=${acronym}&page=${page}&perPage=${perPage}&ordination=id&direction=ASC`,
  );

  return data;
};

export const updateInstitute = async (id, name, acronym) => {
  const response = await axios.put(`${ENDPOINT}/${id}`, {
    name,
    acronym,
  });

  return response;
};

export default getInstitutes;
