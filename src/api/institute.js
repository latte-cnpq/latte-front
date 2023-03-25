import { axios } from './axios';

const ENDPOINT = '/Institute';

export const getInstitutes = async () => {
  const { data } = await axios.get(`${ENDPOINT}/GetAll`);

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

export const executeFilter = async (searchData) => {
  const { data } = await axios.get(
    `${ENDPOINT}/ExecuteFilter?textSearch=${searchData.textSearch}&field=${searchData.field.value}`,
  );

  return data;
};

export const updateInstitute = async (id, name, acronym) => {
  const response = await axios.put(`${ENDPOINT}/Update`, {
    id,
    name,
    acronym,
  });

  return response;
};

export default getInstitutes;
