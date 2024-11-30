import {Link} from 'react-router-dom'
import '../Style.css'
import logo from '../images/logo.png'
import estante from "../images/estante.png"
import 'bootstrap/dist/css/bootstrap.min.css'

function Cadastro(){

    return(
    <>
    <div className="divAnun my-4">
    <h1 className='edit'>Cadastrar</h1>
    <div className="form-container"> 
        
      <form className="formulario" > 
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="Digite seu telefone"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          required
        />

        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          placeholder="Digite sua cidade"
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>

    </div>
    <div className="div-pai">
    <div className="div-perfil">
    <div >
    <Link to="/MeusDados"><img src={logo} alt="Logo Perfil" title="Logo do Perfil" className="App-logo-perfil"/> </Link>  
        
             <Link to='/MeusDados'><h1 className="meu-nome">Perfil</h1></Link>   
            
            
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
        <p className="click">
            <Link to='/'><h1 className="sair">Sair</h1></Link>
            <a></a>
        </p>
        </ul>
    </nav> 
    <img src={estante} className="posicao-estante"/> 
    </div>
    </div> 
    
    </>

    )
}

export default Cadastro