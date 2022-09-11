import Navbar from './components/Navbar'
import MiApi from './components/MiApi';
import {useState} from 'react';

function App() {
  const [buscar, setBuscar] = useState("")
  return (
    <div>
      <Navbar setBuscar={setBuscar} />
      <div className='container mt-5'>
        <MiApi buscar={buscar} />
      </div>
    </div>
    )
  }
export default App;
