import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_PROFILE_URL, PAGE_ARTICLE_URL } from 'constants/router';
import TagList from 'components/tagList';
import AddToFavorite from 'components/addToFavorite';
import EmptyFeed from 'components/emptyFeed';

const Feed = ({ articles }) => {
  if (articles.length === 0) {
    return <EmptyFeed />;
  }
  return (
    (
      <div>
        {articles.map(({
          author: { username, image }, name, description, createdAt, slug, tagList, favorited,
          favoritesCount,
        }) => (
          <div className="article-preview" key={createdAt}>
            <div className="article-meta">
              <Link to={`${PAGE_PROFILE_URL}/${username}`}>
                <img src={image} alt="" />
              </Link>

              <div className="info">
                <Link to={`${PAGE_PROFILE_URL}/${username}`} className="author">
                  {username}
                </Link>
              </div>
              <div className="pull-xs-right">
                <AddToFavorite
                  isFavorite={favorited}
                  articleSlug={slug}
                  favoritesCount={favoritesCount}
                />
              </div>
            </div>
            <span className="date">{createdAt}</span>
            <Link to={`${PAGE_ARTICLE_URL}/${slug}`} className="preview-link">
              <h1>{name}</h1>
              <p>{description}</p>
              <span>Read more...</span>
              <TagList tagList={tagList} />
            </Link>
          </div>
        ))}
      </div>
    )
  );
};

export default Feed;
