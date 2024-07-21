import React from 'react';
import './todosEmpty.css';

function TodosEmpty(){
    return(
            <div className="card">
                <div className="card-overlay"></div>
                <div className="card-inner">YOUR<br>CONTENT</br>HERE</div>
            </div>
    );
};

export {TodosEmpty}