import { parse } from 'query-string';
import { limit } from 'constants/other';

export const range = (count) => Array.from({ length: count }, (item, index) => index + 1);

export const getPagination = (search) => {
  const parseSearch = parse(search);
  const currentPage = parseSearch.page ? Number(parseSearch.page) : 1;
  const offset = currentPage * 10 - limit;
  return { currentPage, offset };
};
