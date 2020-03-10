import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_PROFILE_URL, PAGE_ARTICLE_URL } from 'constants/router';
import TagList from 'components/tagList';

const Feed = ({ articles }) => (
  <div>
    {articles.map(({
      author: { username, image }, name, description, createdAt, slug, tagList,
    }) => (
      <div className="article-preview" key={createdAt}>
        <div className="article-meta">
          <Link to={`${PAGE_PROFILE_URL}/${username}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="info">
          <Link to={`${PAGE_PROFILE_URL}/${username}`} className="author">
            {username}
          </Link>
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
);

export default Feed;
