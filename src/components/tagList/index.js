import React from 'react';

const TagList = ({ tagList }) => (
  <ul className="tag-list">
    {tagList.map((tag) => (
      <li className="tag-pill tag-default tag-outline" key={tag}>
        {tag}
      </li>
    ))}
  </ul>
);

export default TagList;
