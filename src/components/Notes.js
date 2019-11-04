import React from 'react';

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(notes => (<li key={notes.id} className="list-group-item note-box">
                <div>
                    <strong>{notes.title}</strong>
                    <span>{new Date().toLocaleDateString()}</span>
                </div>

                <button type="button" className="btn btn-outline-danger btn-sm">
                    &times;
                </button>

            </li>))}
        </ul>
    )
}