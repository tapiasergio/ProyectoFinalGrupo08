import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './Component/Inicio/Inicio'
import Desarrolladores from './Component/Desarrolladores/Desarrolladores'
import Error from './Component/error/Error'
import SnakeReact from './Component/SnakeReact/Game.js'
import NavBar from './Component/NavBar/NavBar'
import CheemsGame from './Component/GamePhaser/Index'
import Ahorcado from './Component/AhorcadoReact/Game'

function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/desarrolladores' element={<Desarrolladores />}></Route>
            <Route path='/snake-game' element={<SnakeReact/>}></Route>
            <Route path='/cheems-game' element={<CheemsGame/>}></Route>
            <Route path='/ahorcado' element={<Ahorcado/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
          
        
    </>
  );
}

export default App;
