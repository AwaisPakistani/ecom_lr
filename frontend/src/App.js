import logo from './logo.svg';
import React, {lazy, Suspense} from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Baseurl from './components/baseurl/Baseurl.component';
const Home=lazy(()=>import('./pages/home/Home.component'));
const Contact=lazy(()=>import('./pages/contact/Contact.component'));
const About=lazy(()=>import('./pages/about/About.component'));
const Register=lazy(()=>import('./pages/register/Register.component'));
const Login=lazy(()=>import('./pages/login/Login.component'));
const Logout=lazy(()=>import('./components/logout/Logout.component'));

function App() {
  // const {getToken} = Baseurl();
  // if(!getToken()){
  //   <Login/>
  // }
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
             <Route path='/logout' element={<Logout/>}/>
           </Routes>
      </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
