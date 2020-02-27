import React, {useEffect, useState, useContext} from 'react'
import { Link, Redirect } from 'react-router-dom'
import useFetch from 'hooks/useFetch'
import useLocalStorage from 'hooks/useLocalStorage'
import { PAGE_LOGIC_URL, PAGE_GLOBAL_URL } from 'constants/router'
import { CurrentUserContext } from 'contexts/currentUser'
import BackErrorMessage from "components/backendErrorMessage";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [{response, isLoading, isError}, setFetch] = useFetch("/users");
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
                    username
                }
            }
        })
    };

    useEffect( () => {
        if(response){
            setToken(response.user.token);
            setIsSubmit(true);
            setCurrentUserState((state) => ({
                ...state,
                isLoading: true,
                isLoggedIn: false,
                currentUser: response.user
            }));
        }
    }, [response, setToken, setCurrentUserState]);

    if(isSubmit){
        return <Redirect to={PAGE_GLOBAL_URL}/>
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link to={PAGE_LOGIC_URL}>Have an account?</Link>
                        </p>
                        <form onSubmit={submitForm}>
                            {isError && <BackErrorMessage backendErrorMessage={isError.errors}/>}
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={username}
                                        onChange={({target: {value}}) => setUsername(value)}
                                    />
                                </fieldset>
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
                                    Sign up
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login
