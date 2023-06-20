import { axios } from './axios';

const ENDPOINT = '/graph';

export const getGraph = async (researcherName, instituteName, productionType, nodeType) => {
  const queryParams = [
  `researcherName=${researcherName}`,
  `instituteName=${instituteName}`,
  `nodeType=${nodeType}`,
  `getAll=true`
];

if (productionType !== '') {
  console.log(productionType)
  queryParams.push(`productionType=${productionType}`);
}

const queryString = queryParams.join('&');
  const { data } = await axios.get(
    `${ENDPOINT}/collab?${queryString}`
  );
  return data;
};

export default getGraph;
