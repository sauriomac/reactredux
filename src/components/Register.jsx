import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { useSelector } from 'react-redux';
import { LoginRegister } from '../actions/auth';



const Register = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state=> state.ui);
    

    const [formValues, handleInputChange] = useForm({
        name: 'rodrigo espinoza',
        email: 'lrodrigo@fff.com',
        password: '123456',
        confirm: '123456',

    })

    const { name, email, password, confirm } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch( LoginRegister(email,password,name));
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('name is required'))
            return false

        } else if (!validator.isEmail(email)) {
            dispatch(setError('email is incorrect'));
            return false

        } else if (password !== confirm || password.legth < 5) {
            dispatch(setError('password should be at least 6 characters and match each other'));
            return false
        }

        dispatch(removeError())
        return true
    }


    return (
        <>
            <h3 className="auth__title mb-5">
                Register
            </h3>
            <form onSubmit={handleRegister}
             className="animate__animated animate__fadeIn animate__faster"
            >
                {
                    msgError && (
                        <div className="auth__alert-error mb-4">
                            {msgError}
                        </div>
                    )
                }
                <input className="auth__input" type="text"
                    name="name" placeholder="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input className="auth__input" type="text"
                    name="email" placeholder="Email" autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input className="auth__input" type="password"
                    name="password" placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <input className="auth__input" type="password"
                    name="confirm" placeholder="Confirm"
                    autoComplete="off"
                    value={confirm}
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary mb-4" type="submit "
                    disabled={false}
                >
                    login
                </button>


                <Link className="link mt-3" to="/auth/login">
                    Already register?
                </Link>
            </form>
        </>
    )
}

export default Register
