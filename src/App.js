import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import TodoList from './components/todoList/TodoList'; // Importe o componente TodoList

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/lista" element={<TodoList />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;