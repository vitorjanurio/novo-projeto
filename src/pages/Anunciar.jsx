import {Link} from 'react-router-dom'
import '../Style.css'
import logo from '../images/logo.png'
import estante from "../images/estante.png"


function Anunciar (){

    
    return (
    <>
<div className="div-pai">
<div className="divAnunm">

<div className="main-wrapper">
      <h1 className='edit'>Cadastro de Livros</h1>

      <div className="form-box">
        <form>
          <div className="input-group">
            <label>Nome do Livro:</label>
            <input type="text" name="bookName" required />
          </div>

          <div className="input-group">
            <label>Descrição:</label>
            <textarea name="description" required></textarea>
          </div>

          <div className="input-group">
            <label>Foto do Livro:</label>
            <input type="file" name="photo" accept="image/*" required />
          </div>

          <div className="input-group">
            <label>Valor:</label>
            <input type="number" name="price" required />
          </div>

          <div className="input-group">
            <label>Contato:</label>
            <input type="text" name="contact" required />
          </div>

          <button type="submit" className="btn-submit">Anunciar</button>
          <button type="button" className="btn-cancel">Cancelar</button>
        </form>
      </div>
    </div>
</div>
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
            <Link to='/MeusLivros'><button id="texto"><>Meus Livros</></button></Link>
        
        </li>
        </ul>
        
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li className='green'>
            <Link to='/Anunciar'><button id="texto"><>Anunciar</></button></Link>
             
        </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
        <Link to='/Comprar'><h1 id="texto"> Comprar</h1></Link>
            <a></a>
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
            
        </p>
        </ul>
    </nav> 
    <img src={estante} className="posicao-estante"/>  
    </div>
    </div> 

    </>

    )
}
    
export default Anunciar