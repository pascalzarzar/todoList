import React, {useState} from 'react'
import Todo from './Todo'
import './TodoList.css'
import TodoForm from './TodoForm';
import emptyState from '../emptyState.svg'


export default function TodoList() {

    const initialTodos = [];

    const [todos, setTodos] = useState(initialTodos);

    const handleDelete = (id) => {
        const remainingTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(remainingTodos);
    }

    const handleEdit = (id, editValue) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                console.log('working');
                console.log({...todo, description: editValue });
                return {...todo, description: editValue }
            }
            return todo;
        });
        return setTodos(updatedTodos);
    }

    return(
        <div className='TodoList'>
            <h1>Pascal's Todo List</h1>
            <TodoForm
            newTodo={setTodos}
            todos={todos}
            />
            {todos.length > 0 ?   
                <ul className='TodoList-list'>
                    {todos.map((todo) => {
                        return(
                            <Todo
                            key={todo.id}
                            id={todo.id}
                            todo={todo.description}
                            delete={handleDelete}
                            edit={handleEdit}
                            />
                        );
                    })}
                </ul>
            :   
                <div>
                    <h2>Congrats! You have no todos!</h2>
                    <p>Start adding some todos or stop working and go party hard!</p>
                    <img src={emptyState} alt="working home illustration" />
                </div>
            }
        </div>
    );
}