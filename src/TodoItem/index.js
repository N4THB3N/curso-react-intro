
import './todoItem.css';

function lineThroughToF(parameter){
    let textDecorationInfo;

    textDecorationInfo = parameter == true ? 'line-through' : 'none';

    return textDecorationInfo;
}

function TodoItem(props){
    return (
      <li style={{textDecorationLine: lineThroughToF(props.completed)}}>
        {props.text}
        <button className='done-botton' onClick={props.onComplete}>V</button>        
        <button className='delete-botton' onClick={props.onDelete}>X</button>
      </li>
    );
  }

export {TodoItem}