import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Use useNavigate no lugar de useHistory
import "./Login.css";
import CustomAlert from '../todoList/CustomAlert';

const Login = () => {
  const [alert, setAlert] = useState({ message: '', type: '', isVisible: false });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const showAlert = (message, type) => {
    setAlert({ message, type, isVisible: true });
    setTimeout(() => {
      setAlert({ message: '', type: '', isVisible: false });
    }, 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'peridot@peri.com' && password === '123') {
      showAlert('Bem vinda Peri', 'success')
      navigate('/lista');
    } else {
      showAlert('VAZA DAQUI INVASOR 😠', 'warn')
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Acesse a lista de tarefas</h1>
        <div className='input-field'>
          <input 
            type='email' 
            placeholder='E-mail'
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <FaUser className='icon'/>
        </div>
        <div className='input-field'>
          <input 
            className='input' 
            type='password' 
            placeholder='Senha' 
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <FaLock className='icon'/>
        </div>
        <button type="submit">Entrar</button>
        {alert.isVisible && (
        <CustomAlert message={alert.message} type={alert.type} onClose={() => setAlert({ ...alert, isVisible: false })} />
      )}
      </form>
    </div>
  );
};

export default Login;