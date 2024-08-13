import { TodoCounter } from '../todoCounter'; 
import { TodoSearch } from '../todoSearch'; 
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../todoButton';
import { TodoContext } from '../todoContext';
import { TodoForm } from '../todoForm';
import { Modal } from '../Modal';
import React from 'react';

function AppUI({

  // loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo

}){

  const {
    loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal
  } = React.useContext(TodoContext);
    return (
        <>
          <div id='formDiv'>
            <TodoCounter 
                // completed={completedTodos} total={totalTodos}
                ></TodoCounter>
    
            {/* <form id='addTodoForm'> */}
              <TodoSearch 
              // searchValue={searchValue}
              // setSearchValue={setSearchValue}
              
              ></TodoSearch>
              <CreateTodoButton></CreateTodoButton>

            {/* </form> */}
    

              <TodoList>
                  {loading && <TodosLoading></TodosLoading>}
                  {error && <TodosError></TodosError>}
                  {(!loading && searchedTodos.length == 0) && <TodosEmpty></TodosEmpty>}

                  {/* {
                  
                  searchedTodos.length > 0 ? ( */}
                  {searchedTodos.length > 0 ? ( searchedTodos.map(todo => (<TodoItem 
                                                key={todo.text} 
                                                text={todo.text} 
                                                completed={todo.completed} 
                                                onComplete={() => completeTodo(todo.text)} 
                                                onDelete={() => deleteTodo(todo.text)}></TodoItem>))):(<p></p>)}
                  
              </TodoList>
              
              {openModal && (
                <Modal><TodoForm></TodoForm></Modal>
              )}


    
          </div>
    
        </>
      );    
}

export { AppUI}