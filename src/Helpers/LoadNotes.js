import { db } from "../firebase/firebase-config"


export const loadNotes =async ( uid ) =>{


        const NoteSnap = await db.collection(`${ uid }/journal/notes/`).get();
        const notes =[];

        NoteSnap.forEach( snaphijo => {
            notes.push({
                id:snaphijo.id,
                ...snaphijo.data()
            })
        })

        



        return notes;
}