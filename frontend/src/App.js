import logo from './logo.svg';
import React, {lazy, Suspense} from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Home=lazy(()=>import('./pages/home/Home.component'));
const Contact=lazy(()=>import('./pages/contact/Contact.component'));
const About=lazy(()=>import('./pages/about/About.component'));
const Register=lazy(()=>import('./pages/register/Register.component'));
const Login=lazy(()=>import('./pages/login/Login.component'));
function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/admin/login' element={<Login/>}/>
           </Routes>
      </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
