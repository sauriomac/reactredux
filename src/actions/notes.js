    import { db } from "../firebase/firebase-config";
import { loadNotes } from "../Helpers/LoadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fileUpload } from "../Helpers/FileUpload";

export const startNewNote = () => {
    return async( dispatch, getState) => {

        const {uid} = getState().auth;
        console.log(uid)


        const newNote ={
            
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const docref = await db.collection(`${ uid }/journal/notes`).add( newNote );

        dispatch( activeNote(docref.id, newNote) )
        dispatch(addNewNote( docref.id,newNote ))


    }
    
}

export const addNewNote =(id, note)=>({
    type: types.noteAddNew,
    payload: {
        id,
        ...note
    }
})
export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
})


export const setNote = ( notes ) =>({
    type: types.noteLoad,
    payload:notes
})


export const startloandingNotes = (uid)=>{
    return async(dispatch)=>{
        const notes = await loadNotes( uid );
        dispatch( setNote( notes ))
    }
}

export const saveNote = (note)=>{
    return async(dispatch, getState)=>{

        const {uid} = getState().auth

        if ( !note.url ){
            delete note.url;
        }
        const noeTofiresotre = {...note};
        delete noeTofiresotre.id;

        await db.doc(`${ uid}/journal/notes/${ note.id}`).update( noeTofiresotre);
        dispatch( refresNote(note.id, noeTofiresotre))
        Swal.fire('saved', note.title, 'success');
    }
}

export const refresNote = (id, note)=>({
    type: types.noteUpdate,
    payload: {
        id, note:{
            id,...note
        }
    }
})

export const noteUpload = (file)=>{
    return async(dispatch, getState)=>{
        const {active:activeanote} =  getState().notes;

      const fileUrl = await fileUpload( file );
      activeanote.url = fileUrl;

      dispatch( saveNote(activeanote))
    }
}


export const startdeleting =( id )=>{
    return async(dispatch, getState) => {

        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${ id }`).delete()

        dispatch(deletenote(id));
    }
}

export const deletenote = (id)=>({
    type: types.noteDelete,
    payload:id
})

export const noteLogout = ()=>({
    type: types.noteLogoutCleaning
    
})