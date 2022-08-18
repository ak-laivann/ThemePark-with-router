import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import { Routes, Route } from 'react-router-dom'
import Tab2 from './components/Tab2';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={ <Intro /> } />
        <Route path='/tab2' element={ <Tab2 /> } />
      </Routes>
    </div>
  );
}

export default App;