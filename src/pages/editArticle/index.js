import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ArticleForm from 'components/articleForm';
import useFetch from 'hooks/useFetch';
import { PAGE_ARTICLES_URL, PAGE_ARTICLE_URL, PAGE_GLOBAL_URL } from 'constants/router';
import { CurrentUserContext } from 'contexts/currentUser';


const EditArticle = ({ match }) => {
  const { slug } = match.params;
  const apiURL = `${PAGE_ARTICLES_URL}/${slug}`;
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiURL);
  const [
    { response: updateArticleResponse, isError: updateArticleError }, doUpdateArticle,
  ] = useFetch(apiURL);

  const [{ isLoggenIn }] = useContext(CurrentUserContext);
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    if (!fetchArticleResponse) {
      return;
    }
    const {
      title, description, body, tagList,
    } = fetchArticleResponse.article;
    setInitialValues({
      title,
      description,
      body,
      tagList,
    });
  }, [fetchArticleResponse]);

  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (updateArticleResponse) {
      setIsSuccessfulSubmit(true);
    }
  }, [updateArticleResponse]);

  if (isLoggenIn === false) {
    return <Redirect to={PAGE_GLOBAL_URL} />;
  }

  if (isSuccessfulSubmit) {
    return <Redirect to={`${PAGE_ARTICLE_URL}/${slug}`} />;
  }

  const handleSubmit = (article) => {
    doUpdateArticle({
      method: 'put',
      data: {
        article,
      },
    });
  };

  return (
    <ArticleForm
      onSubmit={handleSubmit}
      errors={(updateArticleError && updateArticleError.errors) || []}
      initialValues={initialValues}
    />
  );
};

export default EditArticle;
