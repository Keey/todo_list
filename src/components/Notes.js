import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(notes => (
                <CSSTransition
                    key={notes.id}
                    in={alert.visible}
                    timeout={750}
                    classNames={'alert'}
                    unmountOnEnter
                    unmountOnExit
                >
                    <li key={notes.id} className="list-group-item note-box">
                        <div>
                            <strong>{notes.title}</strong>
                            <span>{notes.date}</span>
                        </div>

                        <button onClick={() => onRemove(notes.id)} type="button"
                                className="btn btn-outline-danger btn-sm">
                            &times;
                        </button>

                    </li>

                </CSSTransition>))}
        </TransitionGroup>
    )
}