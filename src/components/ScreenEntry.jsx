import React from 'react'
import { useSelector } from 'react-redux';
import ScreenEntrie from './ScreenEntrie';

const ScreenEntry = () => {

    const {notes} = useSelector( state=> state.notes)
    return (
        <div className="screen__entries">
            {
                notes.map((note,index) => (
                    <ScreenEntrie key={index}
                    className="animate__animated animate__fadeInUp animate__faster"
                    {...note} />
                ))
            }

        </div>
    )
}

export default ScreenEntry
