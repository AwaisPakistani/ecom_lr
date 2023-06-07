import logo from './logo.svg';
import React, {lazy, Suspense} from 'react';
import './App.css';
import Baseurl from './components/baseurl/Baseurl.component';
import { Routes,Route } from 'react-router-dom';
const Home=lazy(()=>import('./pages/home/Home.component'));
const Contact=lazy(()=>import('./pages/contact/Contact.component'));
const About=lazy(()=>import('./pages/about/About.component'));
const Register=lazy(()=>import('./pages/register/Register.component'));
const Login=lazy(()=>import('./pages/login/Login.component'));
const Logout=lazy(()=>import('./components/logout/Logout.component'));
const Users=lazy(()=>import('./pages/users/Users.component'));

function App() {
const {getToken} = Baseurl();

  
  if(!getToken()){
    return <Login/>
  }
  return (
    <div className="App">
      
      <Suspense fallback={<h1>Loading...</h1>}>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/admin/register' element={<Register/>}/>
             <Route path='/admins' element={<Users/>}/>
             <Route path='/admin/login' element={<Login/>}/>
             <Route path='/logout' element={<Logout/>}/>
           </Routes>
      </Suspense>
      
      
    </div>
  );
}

export default App;
