import { axios } from './axios';

const ENDPOINT = '/graph';

export const getGraph = async (researcherName, instituteName, productionType, nodeType) => {
  const { data } = await axios.get(
    `${ENDPOINT}/collab` +
      `?researcherName=${researcherName}` +
      `&instituteName=${instituteName}` +
      `&productionType=${productionType}` +
      `&nodeType=${nodeType}`,
  );
  return data;
};

export default getGraph;
