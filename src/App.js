import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Err404 from './pages/Err404';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Quiz />}/>
      <Route path='*' element={ <Err404 />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
