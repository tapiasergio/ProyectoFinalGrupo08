import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './App.css';
import Inicio from './Component/Inicio/Inicio'
import Desarrolladores from './Component/Desarrolladores/Desarrolladores'
import Error from './Component/error/Error'
import GameReact from './Component/GameReact/GameReact'
import GamePhaser from './Component/GamePhaser/GamePhaser'
import NavBar from './Component/NavBar/NavBar'

function App() {
  return (
    <Container>
    
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/desarrolladores' element={<Desarrolladores />}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
          
        
    </Container>
  );
}

export default App;
