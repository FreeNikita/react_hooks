import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';
import { PAGE_PROFILE_URL } from 'constants/router';
import Loading from 'components/loading';
import ErrorMessage from 'components/errorMessage';
import TagList from 'components/tagList';

const ArticleFeed = ({ match }) => {
  const { slug } = match.params;
  const apiURL = `/articles/${slug}`;
  const [{ response, isLoading, isError }, doFetch] = useFetch(apiURL);

  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return (
    <div className="article-page">
      <div className="banner">
        {
              !isLoading && response && (
              <div className="container">
                <h1>{response.title}</h1>
                <div className="article-meta">
                  <Link to={`${PAGE_PROFILE_URL}/${response.article.author.username}`}>
                    <img src={response.article.author.image} alt="" />
                  </Link>
                  <div className="info">
                    <Link to={`${PAGE_PROFILE_URL}/${response.article.author.username}`}>
                      {response.article.author.username}
                    </Link>
                    <span className="date">{response.article.createAt}</span>
                  </div>
                </div>
              </div>
              )
          }
      </div>
      <div className="container page">
        { isLoading && <Loading />}
        { isError && <ErrorMessage />}
        {
                !isLoading && response && (
                <div className="row article-content">
                  <div className="col-xs-12">
                    <div>
                      <p>{response.article.body}</p>
                    </div>
                    <TagList tagList={response.article.tagList} />

                  </div>
                </div>
                )
            }

      </div>
    </div>
  );
};

export default ArticleFeed;
