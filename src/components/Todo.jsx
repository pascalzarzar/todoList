import React, { useState } from 'react'
import './Todo.css'

export default function Todo(props){

    const isEditingInitialState = false;
    const inputInitialState = props.todo;
    const isCompletedInitialState = false;

    const [isEditing, setIsEditing] = useState(isEditingInitialState);
    const [inputValue, setInputValue] = useState(inputInitialState);
    const [isCompleted, setIsCompleted] = useState(isCompletedInitialState);

    const changeHandler = (evt) => {
        setInputValue(evt.target.value);
    }

    const cancelEditHandler = () => {
        setIsEditing(!isEditing);
        setInputValue(inputInitialState);
    }

    const editTodo = (evt) => {
        evt.preventDefault();
        props.edit(props.id, inputValue);
        setIsEditing(!isEditing);
    }

    return(
        <li className='Todo'>
            { isEditing === false ?
                <div className='Todo-card'>
                        <p className={isCompleted ? 'Todo-isCompleted' : ''}>
                            <input type="checkbox" className='Todo-checkBox' onClick = {() => setIsCompleted(!isCompleted)}/>
                            {props.todo}
                        </p>
                        <div className='Todo-icons'>
                            <i className="far fa-edit icon" onClick={() => setIsEditing(!isEditing)}></i>
                            <i className="far fa-trash-alt icon" onClick={() => props.delete(props.id)}></i>
                        </div>
                </div>        
            :   <div className='Todo-card'>
                    <form action="" onSubmit={editTodo} className='Todo-editForm'>
                        <input type="text" value={inputValue} onChange={changeHandler} />
                        <button type='submit'>Save Change</button>
                    </form>
                    <button className='Todo-cancelEditButton' onClick={cancelEditHandler}>Cancel</button>
                </div>
            }    
        </li>

    );
}