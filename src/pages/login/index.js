import React, {useState, useContext, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import useFetch from 'hooks/useFetch'
import {PAGE_GLOBAL_URL, PAGE_REGISTER_URL} from 'constants/router'
import useLocalStorage from "hooks/useLocalStorage";
import {CurrentUserContext} from "contexts/currentUser";
import BackErrorMessage from 'components/backendErrorMessage';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [{response, isLoading, isError}, setFetch] = useFetch("/users/login");
  const [ , setToken] = useLocalStorage("token");
  const [ , setCurrentUserState ] = useContext(CurrentUserContext);

  const submitForm = (e) => {
    e.preventDefault();
    setFetch({
      method: 'post',
      data: {
        user: {
          email,
          password,
        }
      }
    })
  };

  useEffect( () => {
    if(response){
      setToken(response.user.token);
      setIsSubmit(true);
      setCurrentUserState((state)=> ({
        ...state,
        isLoading: true,
        isLoggedIn: false,
        currentUser: response.user
      }));
    }
  }, [response, setToken, setCurrentUserState ]);

  if(isSubmit){
    return <Redirect to={PAGE_GLOBAL_URL}/>
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to={PAGE_REGISTER_URL}>Need an account?</Link>
            </p>
            <form onSubmit={submitForm}>
              {isError && <BackErrorMessage backendErrorMessage={isError.errors}/>}
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={({target: {value}}) => setEmail(value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isLoading}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Authentication
