import './Style.css'
import inicio from './images/inicio.jpg'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'



function Header (){
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Login:", { email, password });
  };

  const handleRegister = () => {
    
    console.log("Redirecionando para a página de registro...");
  };
    return(  
    <> 
    <div>
    <img src={inicio} className='inicioTelaCheia'/>
    <div className="login-container">
    
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">Entrar</button>
        <Link to="/Cadastro"><button type="button" className="register-button" onClick={handleRegister}>
          Cadastrar
        </button></Link>
        
      </form>
      
    </div>
    </div>

    </>
        
    )
}

export default Header