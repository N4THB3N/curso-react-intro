import React from 'react';
import './todoSearch.css';
import { TodoContext } from '../todoContext';

function TodoSearch(){

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
      <input placeholder="Cortar cebolla" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value);
      }}></input>
    );
  }

export {
    TodoSearch
};