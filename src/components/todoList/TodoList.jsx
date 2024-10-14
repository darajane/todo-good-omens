import React, { useState, useEffect } from 'react';
import Todos from './Todo'; // Importe o componente de tarefa
import TodoForm from './TodoForm';
import Search from './Search';
import Filter from './Filter';
import './TodoList.css';
import CustomAlert from '../todoList/CustomAlert';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Assistir Good Omens',
      category: 'Obrigação',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudo',
      isCompleted: false
    }
  ]);

  const [alert, setAlert] = useState({ message: '', type: '', isVisible: false });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
      },
    ];
    setTodos(newTodos);
    // showAlert('Tarefa adicionada com sucesso!', 'success');
  };

  const removeTodo = (id) => {
    if (id === 1) {
      showAlert('NEM PENSE NISSO 👿', 'error');
    // alert('NEM PENSE NISSO')
      return;
    }
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    showAlert('Te aguardo na próxima 👌', 'remove')
  };

  const completeTodo = (id) => {
    if (id === 1) {
      showAlert('Não fez mais do que a sua obrigação 👼', 'success');
      return;
    }

    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
    showAlert('Mandou bem 😁' , 'ok')
  };

  const showAlert = (message, type) => {
    setAlert({ message, type, isVisible: true });
    setTimeout(() => {
      setAlert({ message: '', type: '', isVisible: false });
    }, 3000);
  };

  return (
    <div className='app'>
      <h1>Tarefas Diárias</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        {todos
          .filter((todo) =>
            filter === 'All'
              ? true
              : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted)
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) =>
            sort === 'Asc'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todos key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
      {alert.isVisible && (
        <CustomAlert message={alert.message} type={alert.type} onClose={() => setAlert({ ...alert, isVisible: false })} />
      )}
    </div>
  );
};

export default TodoList;