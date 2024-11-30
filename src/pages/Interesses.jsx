import {Link} from 'react-router-dom'
import '../Style.css'
import logo from '../images/logo.png'
import estante from "../images/estante.png"
import React, { useState } from 'react';


function Interesses(){
    const [bookName, setBookName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [selection, setSelection] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log({
            bookName,
            city,
            email,
            contact,
            selection,
        });
    };

    return(
    <>
<div className="div-pai">
    <div className="divAnunm">
        <h1 className="edit">Interesses</h1>
    <div className="form-container">
            
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="bookName">Nome do Livro:</label>
                    <input
                        type="text"
                        id="bookName"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="city">Cidade:</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="contact">Contato:</label>
                    <input
                        type="text"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="selection">Selecionar Ação:</label>
                    <select
                        id="selection"
                        value={selection}
                        onChange={(e) => setSelection(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Selecione uma opção
                        </option>
                        <option value="buy">Comprar</option>
                        <option value="exchange">Trocar</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Enviar</button>
            </form>
        </div>

    </div>
    <div className="div-perfil">
    <div >
    <Link to="/Perfil"><img src={logo} alt="Logo Perfil" title="Logo do Perfil" className="App-logo-perfil"/> </Link>    
        
             <Link to='/Perfil'><h1 className="meu-nome">Perfil</h1></Link>   
            
            
        </div>
        <div className="pesquisa">
        <button className="search-button">
                  🔍 Buscar
        </button>
        </div>
        
    </div>
     
    <div className="borda" >
    <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
        <Link to='/MeusLivros'><h1 id="texto">Meus Livros</h1></Link>
            <a></a>
        </li>
        </ul>
        
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
        <Link to='/Anunciar'><h1 id="texto">Anunciar</h1></Link>
            
        </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
            <Link to='/Comprar'><h1 id="texto"> Comprar</h1></Link>
           
            
        </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
            <Link to='/Mensagem'><h1 id="texto">Mensagens</h1></Link>
            
        </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li className='green'>
            <Link to='/Interesses'><h1 id="texto">Interesses</h1></Link>
             
        </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <p className="click">
        <Link to='/'><h1 className="sair">Sair</h1></Link>
            
        </p>
        </ul>
    </nav> 
    <img src={estante} className="posicao-estante"/>  
    </div>
    </div> 

    </>

    )
}

export default Interesses