import React from "react";
import './register.styles.css';
import Base from "../layout/Base.Component";
import { Button } from "react-bootstrap";
import { useEffect,useState } from "react";
import Baseurl from "../../components/baseurl/Baseurl.component";

export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setpassword] = useState('');
    const [confirmpassword,setConfirmpassword] = useState('');

    const {http} = Baseurl();
    const registerAdmin=(()=>{
      
      http.post('/register',{name:name,email:email,role:role,phone:phone,password:password,confirmpassword:confirmpassword}).then((res)=>{
         alert(res.data.message);
      })

      // http.post('/admin/register',{email:email,password:password}).then((res)=>{
      //    alert(res.data.message);
      //     setToken(res.data.user,res.data.access_token,res.data.message);
      //  })
      
    })
    return(
        <Base>
                
          <section className="p-3"> 
             <div className="card">
                <h3>Registration Form</h3>
                <div className="form">
                    
                   <form className="m-2 p-4">
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>User Name</label>
                         <input className="form-control" type="text" name="name" placeholder="Enter Username" onChange={e=>setName(e.target.value)} />
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Email</label>
                         <input className="form-control" type="email" name="email" placeholder="Enter Email"  onChange={e=>setEmail(e.target.value)} />
                     </div>
                     </div>
                   </div>
                     
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Role</label>
                         <select className="form-control" onChange={e=>setRole(e.target.value)}>
                            <option>Select Role</option>
                            <option value='admin'>Admin</option>
                            <option value="editor">Editor</option>
                            <option value="writer">Writer</option>
                         </select>
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Phone</label>
                         <input type="tel" className="form-control"  name="phone" placeholder="Enter Phone" onChange={e=>setPhone(e.target.value)}/>
                     </div>
                     </div>
                   </div>
                   <div className="row">
                    <div className="col-lg-12">
                    <div className="form-group">
                        <label>Password</label>
                         <input className="form-control" type="password" name="password" placeholder="Enter Password" 
                         onChange={e=>setpassword(e.target.value)}/>
                     </div>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col-lg-12">
                     <div className="form-group">
                        <label>Confirm Password</label>
                         <input className="form-control" type="password" name="confirm_password" placeholder="Enter Confirm Password"
                         onChange={e=>setConfirmpassword(e.target.value)}/>
                     </div>
                     </div>
                     </div>
                     <div className="form-group">
                        <button onClick={registerAdmin} className="btn btn-primary">Register</button>
                     </div>
                   </form>
                </div>
             </div>
          </section>
          
        </Base>
    );
}