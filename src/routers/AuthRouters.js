import React from 'react'
import { Route, Switch, Redirect  } from 'react-router-dom';

import Login from '../components/Login.jsx';
import Register from '../components/Register';

const AuthRouters = () => {
    return (
       
       
            <div className="auth__main">
                <div className="auth__box-container">
                <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component={Login}
                    />
                    <Route
                        exact
                        path="/auth/register"
                        component={Register}
                    />
                    <Redirect to="/auth/register" />
                </Switch>
                </div>
            </div>
       

        
       
    )
}

export default AuthRouters
