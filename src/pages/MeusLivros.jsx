import {Link} from 'react-router-dom'
import '../Style.css'
import logo from '../images/logo.png'
import estante from "../images/estante.png"


function MeusLivros (){
   
    return (
    <>
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
        <li className='green'>
            
            <Link to='/MeusLivros'> <button id="texto"><>Meus Livros</></button></Link>
        
        </li>
        </ul>
        
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
        <Link to='/Anunciar'><button id="texto"><>Anunciar</></button></Link>

        </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li id="square">
        <Link to='/Comprar'><h1 id="texto">Comprar</h1></Link>
            
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
    <div className='receber'>
        <div className='div-1'>
        <div className='bloco-1'>
            <div className='bloco-Sec1'></div>
            <div className='bloco-Sec2'></div>
            <div className='bloco-Sec3'></div>
            <div className='bloco-Sec4'></div>
            <div className='bloco-Sec5'></div>
        </div>
        <div className='bloco-2'>
            <div className='bloco-Sec1'></div>
            <div className='bloco-Sec2'></div>
            <div className='bloco-Sec3'></div>
            <div className='bloco-Sec4'></div>
            <div className='bloco-Sec5'></div>
        </div>
        <div className='bloco-3'>
            <div className='bloco-Sec1'></div>
            <div className='bloco-Sec2'></div>
            <div className='bloco-Sec3'></div>
            <div className='bloco-Sec4'></div>
            <div className='bloco-Sec5'></div>
        </div>
            <div className='bloco-4'>
            <div className='bloco-Sec1'></div>
            <div className='bloco-Sec2'></div>
            <div className='bloco-Sec3'></div>
            <div className='bloco-Sec4'></div>
            <div className='bloco-Sec5'></div>
        </div>
        </div>
        
    </div>
    <img src={estante} className="posicao-estante"/> 
    
    </div>
    </div> 
    

    </>

    )
}
    
export default MeusLivros