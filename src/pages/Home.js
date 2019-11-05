import React, {useContext, useEffect} from 'react';
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";

export const Home = () => {

    const {loading,notes,fetchNotes,removeNote} = useContext(FirebaseContext)

    // const notes = new Array(3).fill('').map((_, i) => ({id: i, title: `Note ${i + 1}`}));

    useEffect(()=>{
        fetchNotes()
        // eslint-disable-next-line
    },[])

    return (
        <div className="jumbotron jumbotron-fluid p-4">
            <div className="container p-0">
                <Form/>
                <hr/>

                {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}/> }

            </div>
        </div>
    )
}