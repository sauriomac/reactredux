import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { FinishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";


export const startLogin = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e)
                dispatch(FinishLoading())
                Swal.fire('Error', e.message, 'error');
            })
        


    }
}

export const LoginRegister = (email, password, name) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name })
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e)
                Swal.fire('Error', e.message, 'error'); 
            })
    }
}

export const startgoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid, displayName
    }
})


export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout())
        dispatch( noteLogout())
    }
}

export const logout = () => ({
    type: types.logout
})