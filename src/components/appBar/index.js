import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  PAGE_GLOBAL_URL, PAGE_LOGIC_URL, PAGE_REGISTER_URL, PAGE_NEW_ARTICLE_URL, PAGE_PROFILE_URL,
} from 'constants/router';
import { CurrentUserContext } from 'contexts/currentUser';

const AppBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const { isLoggedIn, currentUser: { username, image } } = currentUserState;

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to={PAGE_GLOBAL_URL} className="nav-link" exact>
              Home
            </NavLink>
          </li>
          {
                        isLoggedIn === false && (
                          <>
                            <li className="nav-item">
                              <NavLink to={PAGE_LOGIC_URL} className="nav-link" exact>
                                Sign In
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to={PAGE_REGISTER_URL} className="nav-link" exact>
                                Sign Up
                              </NavLink>
                            </li>
                          </>
                        )
                    }
          {
                        isLoggedIn && (
                          <>
                            <li className="nav-item">
                              <NavLink to={PAGE_NEW_ARTICLE_URL} className="nav-link" exact>
                                <i className="ion-compose" />
                                        &nbsp; New Post
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to={`${PAGE_PROFILE_URL}/${username}`} className="nav-link">
                                <img
                                  className="user-pic"
                                  src={image}
                                  alt=""
                                />
                                { username}
                              </NavLink>
                            </li>
                          </>
                        )
                    }
        </ul>
      </div>
    </nav>
  );
};

export default AppBar;
