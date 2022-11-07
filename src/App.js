import logo from './logo.svg';
import './App.css';
import Inicio from './Component/Inicio/Inicio'
import Desarrolladores from './Component/Desarrolladores/Desarrolladores'
import Error from './Component/error/Error'
import Game from './Component/GameReact/Game'

function App() {
  return (
    <Container>
    
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/rankin' element={<Rankin />}></Route>
            <Route path='/desarrolladores' element={<Desarrolladores />}></Route>
            <Route path='/game' element={<Game />}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </Router>
          
        
    </Container>
  );
}

export default App;
