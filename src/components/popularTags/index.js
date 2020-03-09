import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import Loading from 'components/loading';
import ErrorMessage from 'components/errorMessage';
import { PAGE_TAGS_URL } from 'constants/router';

const PopularTags = () => {
  const [{ response, isLoading, isError }, doFetch] = useFetch('/tags');

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {response.tags.map((tag) => (
          <Link to={`${PAGE_TAGS_URL}/${tag}`} className="tag-default tag-pill" key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
