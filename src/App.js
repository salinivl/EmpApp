import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Empdashboard from './components/Empdashboard';
import Empform from './components/Empform';

function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
      <Route path='/' element={<Empdashboard/>}/>
      <Route path='/form' element={<Empform/>}/>
   


      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
