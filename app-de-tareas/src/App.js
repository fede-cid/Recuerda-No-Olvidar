import './App.css';
import ListaDeTareas from './js/listaDeTareas'
import Fade from 'react-reveal/Fade';

function App() {
  return (
    
    <div className="App">
      <Fade bottom cascade>
        <h1> RECUERDA NO OLVIDAR</h1>
     </Fade>
      <div className='tarea-lista-principal'>
       
        <h2>Mis Tarea</h2>
        
        <ListaDeTareas  />
       
        </div>
        
    </div>
    
  );
}

export default App;
