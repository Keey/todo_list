import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('');

    const alert = useContext(AlertContext);

    const firebase = useContext(FirebaseContext);

    const submitHandler = event => {

        event.preventDefault();
        alert.show(value,'success');

        if(value.trim()){
            firebase.addNode(value.trim()).then(()=>{   alert.show(' Примітку додано!', 'success')}).catch(()=>{
                alert.show(' Щось не так!', 'danger');
            })

            setValue('')
        }else {
            alert.show(' Додайте назву примітки!');
        }

    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Додайте примітку"
                value={value}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}