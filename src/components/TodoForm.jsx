import React, { useState } from 'react'
import './TodoForm.css'
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm(props){

    const initialInputValue = '';

    const [inputValue, setInputValue] = useState(initialInputValue);

    const handleChange = (evt) => {
        let value = evt.target.value;
        setInputValue(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.newTodo([...props.todos, { description: inputValue, id: uuidv4() }]);
        setInputValue(initialInputValue);
    }

    return(
        <div className="TodoForm">
            <form action='' className='TodoForm-form' onSubmit={handleSubmit} >
                <input type='text' name='description' onChange={handleChange}  value={inputValue}/>
                <button>Add Todo</button>
            </form>
        </div>
    );
}