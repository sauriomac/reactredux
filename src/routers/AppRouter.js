import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Redirect, Switch} from 'react-router-dom';

import AuthRouters from './AuthRouters';
import Screen from '../components/Screen';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { PrivateRoute }from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { loadNotes } from '../Helpers/LoadNotes';
import { startloandingNotes } from '../actions/notes';


const AppRouter = () => {

    const dispatch = useDispatch();
    const [Checking, setChecking] = useState(true);
    const [isLoggedIN, setIsLoggedIN] = useState(false)
   

    useEffect(() => {

        firebase.auth().onAuthStateChanged( async(user)=>{
            if (user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIN( true );

               
                dispatch( startloandingNotes( user.uid ))
            } else {
                setIsLoggedIN( false );
            }
            setChecking(false);
        })
        
       
    }, [dispatch,setChecking, setIsLoggedIN])

    if ( Checking ){
        return (
            <h1>Waiting.............</h1>
        )
    }
    return (
        <Router>
            <>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={AuthRouters}
                            isAuthenticated={isLoggedIN}
                        />
                        <PrivateRoute
                            path="/"
                            exact
                            component={Screen}
                            isAuthenticated={isLoggedIN}
                        />
                        <Redirect to="/auth/login" />
                    </Switch>
            </>
        </Router>
    )
}

export default AppRouter
