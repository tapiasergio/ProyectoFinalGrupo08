import logo from './logo.svg';
import './App.css';
import Inicio from './Component/Inicio/Inicio'
import Desarrolladores from './Component/Desarrolladores/Desarrolladores'
import Error from './Component/error/Error'
import GameReact from './Component/GameReact/GameReact'
import GamePhaser from './Component/GamePhaser/GamePhaser'

function App() {
  return (
    <Container>
    
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/rankin' element={<Rankin />}></Route>
            <Route path='/desarrolladores' element={<Desarrolladores />}></Route>
            <Route path='/gameReact' element={<GameReact />}></Route>
            <Route path='/gamePhaser' element={<GamePhaser />}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
          
        
    </Container>
  );
}

export default App;
