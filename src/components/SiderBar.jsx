import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth';
import ScreenEntry from './ScreenEntry'

import { useSelector } from 'react-redux';
import { startNewNote } from '../actions/notes';

const SiderBar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth)

    const HandleLogout = ()=>{
        dispatch( startLogout())
        console.log('click')
    }
    const HandleAddNEW = ()=>{
        dispatch( startNewNote() )
    }

    return (
        <aside className="sidebar">
            <div className="sidenav">
                <h3 className="mt-4">
                <i className="far fa-moon"></i>
                <span className="ml-1">{name}</span>
                </h3>
                <button className=" mt-4"
                onClick={HandleLogout}>
                    Logout
                </button>

            </div>
            <div className="NewEn"
            onClick={ HandleAddNEW }
            >
            
            <i className="fas fa-calendar-plus fa-7x" ></i>
            <p className="mt-4 mb-4">New Entry</p>
            </div>
            <ScreenEntry />
        </aside>
    )
}

export default SiderBar
