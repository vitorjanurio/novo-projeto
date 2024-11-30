import './App.css'
import Header from './Header'
import {Routes, Route} from'react-router-dom'
import Cadastro from './pages/Cadastro'
import HomeButton from './pages/BotaoHome'
import MeusLivros from './pages/MeusLivros'
import Anunciar from './pages/Anunciar'
import Comprar from './pages/Comprar'
import Mensagem from './pages/Mensagem'
import Interesses from './pages/Interesses'
import Sair from './pages/Sair'
import Logo from './pages/Logo'
import MeusDados from './pages/MeusDados'


function App() {

  return (
    <>
    
    <HomeButton/>
    <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/Cadastro' element={<Cadastro/>}/>
    <Route path='/MeusLivros' element={<MeusLivros/>}/>
    <Route path='/Anunciar' element={<Anunciar/>}/>
    <Route path='/Comprar' element={<Comprar/>}/>
    <Route path='/Mensagem' element={<Mensagem/>}/>
    <Route path='/Interesses' element={<Interesses/>}/>
    <Route path='/' element={<Sair/>}/>
    <Route path='/Teste' element={<Logo/>}/>
    <Route path='/MeusDados' element={<MeusDados/>}/>
    </Routes>
    
    </>
  )
}

export default App
