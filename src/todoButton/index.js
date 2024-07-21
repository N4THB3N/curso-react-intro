import './todoButton.css';

function CreateTodoButton(){
    return (
      <button className="add-btn" onClick={(event) => {
        
        console.log('Le diste click') 
        console.log(event)}}>+</button>
    );
  }

export {CreateTodoButton}