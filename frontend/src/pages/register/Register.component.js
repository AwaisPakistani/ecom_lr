import React from "react";
import './register.styles.css';
import Base from "../layout/Base.Component";
import { Button } from "react-bootstrap";

export default function Register(){
    return(
        <Base>
                
          <section>
             <div className="card">
                <h3>Registration Form</h3>
                <div className="form">
                    
                   <form className="m-2 p-4">
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>User Name</label>
                         <input className="form-control" type="text" name="name" placeholder="Enter Username" />
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Email</label>
                         <input className="form-control" type="email" name="email" placeholder="Enter Email" />
                     </div>
                     </div>
                   </div>
                     
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Role</label>
                         <select className="form-control">
                            <option>Select Role</option>
                            <option>Admin</option>
                            <option>Editor</option>
                            <option>Writer</option>
                         </select>
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Phone</label>
                         <input type="tel" className="form-control"  name="phone" placeholder="Enter Phone"/>
                     </div>
                     </div>
                   </div>
                   <div className="row">
                    <div className="col-lg-12">
                    <div className="form-group">
                        <label>Password</label>
                         <input className="form-control" type="password" name="password" placeholder="Enter Password"/>
                     </div>
                    </div>
                   </div>
                   <div className="row">
                    <div className="col-lg-12">
                     <div className="form-group">
                        <label>Confirm Password</label>
                         <input className="form-control" type="password" name="confirm_password" placeholder="Enter Confirm Password"/>
                     </div>
                     </div>
                     </div>
                     <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                     </div>
                   </form>
                </div>
             </div>
          </section>
          
        </Base>
    );
}