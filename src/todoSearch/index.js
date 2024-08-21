import React from 'react';
import './todoSearch.css';
import { TodoContext } from '../todoContext';

function TodoSearch(){

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (

      <div className="search-container">
        <i className="fa fa-search search-icon"></i>
        <input type="text" placeholder="Busca tu tarea" className="search-input" value={searchValue} onChange={(event) => {
          setSearchValue(event.target.value);
        }}/>
    </div>      

      // <input placeholder="Busca tu tarea" value={searchValue} onChange={(event) => {
      //   setSearchValue(event.target.value);
      // }}></input>
      
    );
  }

export {
    TodoSearch
};