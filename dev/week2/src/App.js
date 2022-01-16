import React from 'react'
import Toolbar from './Components/ToolBar';
import Login from './Pages/Login';
import Main from './Pages/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todo from './Components/Todo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toolbar />
          <Routes>
            <Route path = '/' element = {<Todo/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/main' element = {<Main/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
