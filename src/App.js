import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Temporary from './components/Temporary';
import MainBody from './components/MainBody';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FormHeader from './components/FormHeader';
import Questions from './components/Questions';
import Userform from './components/Userform';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Header/> <Temporary/><MainBody/></>}/> 
          <Route path='/form/:id' element={<><FormHeader /><Questions /></>}/>
          <Route path='/response' element={<Userform/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
