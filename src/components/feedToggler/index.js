import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGE_TAGS_URL, PAGE_GLOBAL_URL, PAGE_FEED_URL } from 'constants/router';
import { CurrentUserContext } from 'contexts/currentUser';

const FeedToggler = ({ tagName }) => {
  const [{ isLoggedIn }] = useContext(CurrentUserContext);
  return (
    <div className="feed-toggler">
      <ul className="nav nav-pills outline-active">
        {isLoggedIn && (
        <li className="nav-item">
          <NavLink to={PAGE_FEED_URL} className="nav-link">Your feed</NavLink>
        </li>
        )}

        <li className="nav-item">
          <NavLink to={PAGE_GLOBAL_URL} className="nav-link" exact>Global feed</NavLink>
        </li>

        {tagName && (
          <li className="nav-item">
            <NavLink to={`${PAGE_TAGS_URL}/${tagName}`} className="nav-link">
              <i className="ion-pound" />
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;
