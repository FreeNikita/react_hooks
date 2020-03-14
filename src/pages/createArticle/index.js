import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ArticleForm from 'components/articleForm';
import useFetch from 'hooks/useFetch';
import { PAGE_ARTICLE_URL, PAGE_GLOBAL_URL } from 'constants/router';
import { CurrentUserContext } from 'contexts/currentUser';

const CreateArticle = () => {
  const apiURL = '/articles';
  const [{ response, isError }, doFetch] = useFetch(apiURL);
  const [{ isLoggenIn }] = useContext(CurrentUserContext);
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  const onSubmit = (article) => {
    doFetch({
      method: 'post',
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setIsSuccessfulSubmit(true);
  }, [response]);

  if (isLoggenIn === false) {
    return <Redirect to={PAGE_GLOBAL_URL} />;
  }

  if (isSuccessfulSubmit) {
    return <Redirect to={`${PAGE_ARTICLE_URL}/${response.article.slug}`} />;
  }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        errors={(isError && isError.errors) || {}}
        initialValues={initialValues}
      />
    </div>
  );
};

export default CreateArticle;
