import React, { useEffect } from 'react';
import { stringify } from 'query-string';

import { getPagination } from 'utils';
import useFetch from 'hooks/useFetch';
import Loading from 'components/loading';
import ErrorMessage from 'components/errorMessage';
import Feed from 'components/feed';
import Pagination from 'components/pagination';
import { limit } from 'constants/other';

const getApiUrl = ({ username, offset, isFavorites }) => {
  const params = isFavorites
    ? {
      limit,
      offset,
      favorited: username,
    }
    : {
      limit,
      offset,
      author: username,
    };
  return `/articles?${stringify(params)}`;
};

const UserArticles = ({ username, location, url }) => {
  const isFavorites = location.pathname.includes('favorites');
  const { offset, currentPage } = getPagination(location.search);
  const apiUrl = getApiUrl({ username, offset, isFavorites });
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, isFavorites, currentPage]);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {!isLoading && response && (
        <>
          <Feed articles={response.articles} />
          <Pagination
            total={response.articlesCount}
            limit={limit}
            url={url}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default UserArticles;
