import React, {Fragment} from 'react';
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";

export const Home = () => {
    const notes = new Array(3).fill('').map((_, i) => ({id: i, title: `Note ${i + 1}`}));
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <Form/>
                <hr/>
                <Notes notes={notes}/>
            </div>
        </div>
    )
}