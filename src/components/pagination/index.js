import React from 'react';
import { range } from 'utils';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const PaginationItem = ({ url, page, currentPage }) => {
  const liClasses = classNames({
    'page-item': true,
    active: page === currentPage,
  });

  return (
    <li className={liClasses}>
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({
  total, limit, url, currentPage,
}) => {
  const countPage = Math.ceil(total / limit);
  const pages = range(countPage);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};

export default Pagination;
