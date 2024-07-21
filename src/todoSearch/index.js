import React from 'react';
import './todoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    return (
      <input placeholder="Cortar cebolla" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value);
      }}></input>
    );
  }

export {
    TodoSearch
};