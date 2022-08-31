import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import SobreMim from './pages/SobreMim/SobreMim';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>             
          <Route path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/sobremim' element={<SobreMim />} />      
      
     </Routes>

      <Footer />
    </Router>
  );
}

export default App;