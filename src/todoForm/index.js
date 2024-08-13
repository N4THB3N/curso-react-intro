import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../todoContext'; 

function TodoForm(){

    const {
        addTodo, 
        setOpenModal} = React.useContext(TodoContext);

        const [newTodoValue, setNewTodoValue] = React.useState('');

        const onSubmit = (event) => {event.preventDefault(); addTodo(newTodoValue); setOpenModal(false)}
        const onCancel = (event) => {setOpenModal(false)}
        const onChange = (event) => {setNewTodoValue(event.target.value)}

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder='Escribir TODO'></textarea>
            <div className='todoform-button-container'>
                <button type="submit" className='todoform-button todoform-button-add' >Agregar</button>
                <button type="button" className='todoform-button todoform-button-cancel' onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    );
}

export { TodoForm};