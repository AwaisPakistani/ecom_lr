import React, {lazy, Suspense} from 'react';
import './App.css';
import Baseurl from './components/baseurl/Baseurl.component';
import { Routes,Route } from 'react-router-dom';
import Edituser from './pages/users/Edituser.component';
import View from './pages/users/View.component';
const Home=lazy(()=>import('./pages/home/Home.component'));
const Contact=lazy(()=>import('./pages/contact/Contact.component'));
const About=lazy(()=>import('./pages/about/About.component'));
const Register=lazy(()=>import('./pages/register/Register.component'));
const Login=lazy(()=>import('./pages/login/Login.component'));
const Logout=lazy(()=>import('./components/logout/Logout.component'));
const Users=lazy(()=>import('./pages/users/Users.component'));
const AddCategory=lazy(()=>import('./pages/categories/AddCategory.component'));
const EditCategory=lazy(()=>import('./pages/categories/EditCategory.component'));
const Category=lazy(()=>import('./pages/categories/Category.component'));
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
             <Route path='/edituser/:id' element={<Edituser/>}/>
             <Route path='/showuser/:id' element={<View/>}/>
             <Route path='/categories' element={<Category/>}/>
             <Route path='/add/category' element={<AddCategory/>}/>
             <Route path='/editcategory:id' element={<EditCategory/>}/>
           </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;
