import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startdeleting } from '../actions/notes';
import { useForm } from '../hooks/useForm';
import NoteBar from './NoteBar'

const NoteScreen = () => {

   

    const dispatch  = useDispatch();

    const { active:note }= useSelector(state => state.notes);

    const [formValues, handleInputChage, reset]= useForm( note )
   
    const {body, title, id } = formValues;

    const activeId =useRef( note.id );

    useEffect(() => {

        if (note.id !== activeId.current){
            reset( note );
            activeId.current = note.id
        }
       
    }, [note, reset])

    useEffect(() => {

       dispatch( activeNote( formValues.id, {...formValues }))
       
    }, [formValues, dispatch])

    const handleDelete = ()=>{
        dispatch(startdeleting(id));
    }



    return (
        <div className="note">
            <NoteBar />
            <div className="note__content">
                <input
                    className="note__title"
                    type="text"
                    placeholder="some awesmw title"
                    name="title"
                    value={title}
                    onChange={handleInputChage}

                />
                <textarea
                    className="note__textarea"
                    type="text" placeholer="escriebbbbb"
                    name="body"
                    value={body}
                    onChange={handleInputChage}
                ></textarea>
                {(note.url) &&
                    (<div className="note__image mb-4">
                        <img src={note.url} alt=""
                            style={{
                                height: '300px',
                                width: '400px'
                            }} />
                    </div>)
                }
            </div>
            <button className="btn-red "
                onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}

export default NoteScreen
