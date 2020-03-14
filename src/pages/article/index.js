import React, { useEffect, useContext, useState } from 'react';
import useFetch from 'hooks/useFetch';
import { Link, Redirect } from 'react-router-dom';
import {
  PAGE_PROFILE_URL, PAGE_ARTICLE_URL, PAGE_GLOBAL_URL, PAGE_ARTICLES_URL,
} from 'constants/router';
import Loading from 'components/loading';
import ErrorMessage from 'components/errorMessage';
import TagList from 'components/tagList';
import { CurrentUserContext } from 'contexts/currentUser';
import { isAuthor as checkAuthor } from 'utils';


const ArticleFeed = ({ match }) => {
  const { slug } = match.params;
  const apiURL = `${PAGE_ARTICLES_URL}/${slug}`;
  const [
    {
      response: fetchArticleResponse,
      isLoading: fetchArticleIsLoading,
      isError: fetchArticleIsError,
    },
    doFetch,
  ] = useFetch(apiURL);
  const [{ response: responseDeleteArticle }, doDeleterticle] = useFetch(apiURL);
  const [currentUserState] = useContext(CurrentUserContext);
  const [isSuccessfulDelete, setIsSuccessfulDelete] = useState(false);

  const isAuthor = checkAuthor(fetchArticleResponse, currentUserState);

  const deleteArticle = () => {
    doDeleterticle({
      method: 'delete',
    });
  };

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  useEffect(() => {
    if (responseDeleteArticle) {
      setIsSuccessfulDelete(true);
    }
  }, [responseDeleteArticle]);

  if (isSuccessfulDelete === true) {
    return <Redirect to={PAGE_GLOBAL_URL} />;
  }

  return (
    <div className="article-page">
      <div className="banner">
        {!fetchArticleIsLoading && fetchArticleResponse && (
        <div className="container">
          <h1>{fetchArticleResponse.title}</h1>
          <div className="article-meta">
            <Link to={`${PAGE_PROFILE_URL}/${fetchArticleResponse.article.author.username}`}>
              <img src={fetchArticleResponse.article.author.image} alt="" />
            </Link>
            <div className="info">
              <Link to={`${PAGE_PROFILE_URL}/${fetchArticleResponse.article.author.username}`}>
                {fetchArticleResponse.article.author.username}
              </Link>
              <span className="date">{fetchArticleResponse.article.createAt}</span>
            </div>
            {isAuthor && (
            <span>
              <Link
                className="btn btn-outline-secondary btn-sm"
                to={`${PAGE_ARTICLE_URL}/${slug}/edit`}
              >
                <i className="ion-edit" />
                Edit Article
              </Link>
              <button
                type="button"
                onClick={deleteArticle}
                className="btn btn-outline-danger btn-sm"
              >
                <i className="ion-trash-a" />
                Delete article
              </button>
            </span>
            )}
          </div>
        </div>
        )}
      </div>
      <div className="container page">
        { fetchArticleIsLoading && <Loading />}
        { fetchArticleIsError && <ErrorMessage />}
        {!fetchArticleIsLoading && fetchArticleResponse && (
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>{fetchArticleResponse.article.body}</p>
            </div>
            <TagList tagList={fetchArticleResponse.article.tagList} />

          </div>
        </div>
        )}

      </div>
    </div>
  );
};

export default ArticleFeed;
