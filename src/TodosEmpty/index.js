import React from 'react';
import './todosEmpty.css';

function TodosEmpty(){
    return(
            <div className="card">
                <div className="card-overlay"></div>
                <div className="card-inner"></div>
            </div>
    );
};

export {TodosEmpty}