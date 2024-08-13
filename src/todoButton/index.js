import './todoButton.css';
import { TodoContext } from '../todoContext';
import React from "react";

function CreateTodoButton(){

  const {
    setOpenModal,
    openModal,
} = React.useContext(TodoContext)    

    return (
      <button className="add-btn" onClick={() => {setOpenModal(!openModal)}}>+</button>
    );
  }

export {CreateTodoButton}