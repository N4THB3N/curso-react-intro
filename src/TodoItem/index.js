
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
        <button className='done-botton' onClick={props.onComplete}><i className="fa fa-check" aria-hidden="true"></i></button>        
        <button className='delete-botton' onClick={props.onDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
      </li>
    );
  }

export {TodoItem}