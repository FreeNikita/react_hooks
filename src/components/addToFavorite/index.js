import React from 'react';
import classNames from 'classnames';
import useFetch from 'hooks/useFetch';
import { PAGE_ARTICLES_URL } from 'constants/router';

const AddToFavorite = ({ articleSlug, favoritesCount, isFavorite }) => {
  const apiUrl = `${PAGE_ARTICLES_URL}/${articleSlug}/favorite`;
  const [{ response }, doFetch] = useFetch(apiUrl);
  const favoritesCountWithResponse = response ? response.article.favoritesCount : favoritesCount;
  const isFavoriteWithResponse = response ? response.article.favorited : isFavorite;

  const handleLike = () => {
    doFetch({
      method: isFavoriteWithResponse ? 'delete' : 'post',
    });
  };

  const buttonClasses = classNames({
    btn: true,
    'btn-sm': true,
    'btn-primary': isFavoriteWithResponse,
    'btn-outline-primary': !isFavoriteWithResponse,
  });

  return (
    <button type="button" className={buttonClasses} onClick={handleLike}>
      <i className="ion-heart" />
      <span>
        &nbsp;
        {favoritesCountWithResponse}
      </span>
    </button>
  );
};

export default AddToFavorite;
