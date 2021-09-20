import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startgoogle, startLogin } from '../actions/auth';
import { useForm } from '../hooks/useForm';

const Login = () => {

const dispatch = useDispatch();
const { loading }= useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'lrodrigo@gmail.com',
        password: '12345'

    });

    const { email, password } = formValues;

    const handleLogin =(e)=>{
        e.preventDefault();
        dispatch( startLogin(email, password));

    }
    const handleLogingoogle = ()=>{

        dispatch(startgoogle());

    }

    return (
        <>
            <h3 className="auth__title mb-5">
                Login
            </h3>
            <form onSubmit={handleLogin}
            className="animate__animated animate__fadeIn animate__faster"
            >
                <input className="auth__input" type="text"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input className="auth__input" type="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary "
                disabled={loading}
                        >
                    login
                </button>
                <hr />
                <div className="auth__social">
                    <p>Login with Social</p>
                    <div className="google-btn"
                    onClick={handleLogingoogle}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    )
}

export default Login
