

import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../todoContext';


function App() {

  return (
  <TodoProvider><AppUI></AppUI></TodoProvider>  
  )
}

export default App;
