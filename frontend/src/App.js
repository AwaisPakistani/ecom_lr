import logo from './logo.svg';
import React, {lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Home=lazy(()=>import('./pages/home/Home.component'));
const Contact=lazy(()=>import('./pages/contact/Contact.component'));
const About=lazy(()=>import('./pages/about/About.component'));
function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
           </Routes>
      </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
