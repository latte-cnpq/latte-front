import { axios } from './axios';

const ENDPOINT = '/production';

export const getProductions = async () => {
  const { data } = await axios.get(`${ENDPOINT}`);

  data.books = data.books.map((book) => {
    book.type = 'Livro Publicado';
    book.details = `${book.authorNames}; ${book.title}; ${book.publisher}; ${book.year}.`;
    return book;
  });

  data.articles = data.articles.map((article) => {
    article.type = 'Artigo Publicado';
    article.details = `${article.authorNames}; ${article.title}; ${article.publishedOn}; ${article.year}.`;
    return article;
  });

  const parsedData = [...data.books, ...data.articles];

  return parsedData;
};

export const getProduction = async (id) => {
  const { data } = await axios.get(`${ENDPOINT}/${id}`);

  return data;
};

export const advancedSearch = async (
  title,
  startDate,
  endDate,
  institute,
  researcher,
  page,
  perPage = 10,
) => {
  const { data } = await axios.get(
    `/production/advancedsearch` +
      `?title=${title}` +
      `&startYear=${startDate}` +
      `&endYear=${endDate}` +
      `&researcherName=${researcher}` +
      `&instituteName=${institute}` +
      `&type=ALL` +
      `&page=${page}` +
      `&perPage=${perPage}` +
      `&ordination=id` +
      `&direction=ASC`,
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
