import React from 'react'
import { useSelector } from 'react-redux'
import NoteScreen from './NoteScreen'
import NotSelect from './NotSelect'
import SiderBar from './SiderBar'


const Screen = () => {

    const { active } = useSelector( state =>state.notes);

    return (
        <div className="auth__screen 
        animate__animated animate__fadeIn animate__faster
        " >
            <SiderBar />
            <main>{
                ( active )
                ? (<NoteScreen />):(<NotSelect /> )
                
                
                }
                {/* <NotSelect /> */}
                
            </main>


        </div>
    )
}

export default Screen
