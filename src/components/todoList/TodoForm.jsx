import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault() 
    if(!value || !category)return;
    addTodo(value,category)
    setValue('');
    setCategory('');
  };

  const handleSubmit2 = (event) => {
    navigate('/login');
  }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa :</h2> 
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Insira uma nova tarefa' 
            onChange={(ev) => setValue(ev.target.value)} 
            value={value}
            />
            <select onChange={(ev) => setCategory(ev.target.value)} value={category}>
                <option value="">Selecione uma categoria</option>
                <option value="Obrigação">Obrigação</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit' className='create'>Criar tarefa</button>
            <button onClick={handleSubmit2} className='back'>Voltar</button>
        </form>   
    </div>
  )
}

export default TodoForm