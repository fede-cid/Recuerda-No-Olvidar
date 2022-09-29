import './App.css';
import ListaDeTareas from './js/listaDeTareas'


function App() {
  return (
    <div className="App">
      
        <h1> RECUERDA NO OLVIDAR</h1>
      
      <div className='tarea-lista-principal'>
        <h2>Mis Tarea</h2>
       
        <ListaDeTareas  />
        
        </div>
       
    </div>
  );
}

export default App;
