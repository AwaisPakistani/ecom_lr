import React from "react";
import { useNavigate ,useParams} from 'react-router-dom';
import './users.styles.css';
import Base from "../layout/Base.Component";
import { useEffect,useState } from "react";
import Baseurl from "../../components/baseurl/Baseurl.component";

export default function Edituser(props){
    const navigate =useNavigate();
    // const [role,setRole] = useState('');
    // const [phone,setPhone] = useState('');
    
    const [inputs,setInputs] = useState({});

    const {http} = Baseurl();
    const {id}= useParams();
    

    const fetchuser=()=>{
        http.get('/admin/edit/'+id).then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            })
            
        });
    }
    useEffect(()=>{
        fetchuser();
     },[])

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    
const updateAdmin=(()=>{
        http.put('/admin/update/'+id,inputs).then((res)=>{
          // alert(res.data.msg);
           navigate('/admins');
        });
    })
    return(
        <Base>
                
          <section className="p-3">
             <div className="card">
                <h3>Update User</h3>
                <div className="form">
                    
                   <form className="m-2 p-4">
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>User Name</label>
                         <input className="form-control" type="text" name="name" placeholder="Enter Username"
                         value={inputs.name || ''}
                         onChange={handleChange} />
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Email</label>
                         <input className="form-control" type="email" name="email" placeholder="Enter Email"  value={inputs.email || ''}
                         onChange={handleChange} />
                     </div>
                     </div>
                   </div>
                     
                   {/* <div className="row">
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
                   </div> */}
                   <br/>
                  
                     <div className="form-group">
                        <button onClick={updateAdmin} className="btn btn-primary">Update User</button>
                     </div>
                   </form>
                </div>
             </div>
          </section>
          
        </Base>
    );
}