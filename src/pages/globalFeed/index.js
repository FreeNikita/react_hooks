import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import Feed from 'components/feed';
import Pagination from 'components/pagination';
import { getPagination } from 'utils';
import { stringify } from 'query-string';
import { limit } from 'constants/other';
import { PAGE_ARTICLES_URL } from 'constants/router';


const GlobalFeed = ({ location, match }) => {
  const { currentPage, offset } = getPagination(location.search);
  const stringifyParams = stringify({
    limit,
    offset,
  });

  const URL = `${PAGE_ARTICLES_URL}?${stringifyParams}`;
  const [{ response, isLoading, isError }, doFetch] = useFetch(URL);

  useEffect((
    doFetch
  ), [doFetch, currentPage]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>Medium clone</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            { isLoading && <div>Loading...</div>}
            { isError && <div>Some error happened</div>}
            {
                            !isLoading && response && (
                              <>
                                <Feed articles={response.articles} />
                                <Pagination
                                  total={response.articlesCount}
                                  limit={limit}
                                  url={match.url}
                                  currentPage={currentPage}
                                />
                              </>
                            )
                        }
          </div>
          <div className="col-md-3">
            popular tags
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
