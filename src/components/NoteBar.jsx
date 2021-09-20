import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { noteUpload, saveNote } from '../actions/notes';

const NoteBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const HandleSave = ()=>{
        
        dispatch( saveNote( active ))

    }

    const HandleSavePicture =()=>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if ( file ){
            dispatch(noteUpload(file))
        }
    }

    return (
        <div className="note__bar">
            <span>28 de agosto 2021</span>
            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display:'none'}}
                onChange={handleFileChange}

            />
            <div className="flex">
                <button className="btn"
                onClick={HandleSavePicture}>
                    picture
                </button>
                <button className="btn"
                onClick={HandleSave}>
                    save
                </button>
            </div>
        </div>
    )
}

export default NoteBar
