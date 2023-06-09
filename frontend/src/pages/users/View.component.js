import React from "react";
import { useNavigate ,useParams} from 'react-router-dom';
import './users.styles.css';
import Base from "../layout/Base.Component";
import { useEffect,useState } from "react";
import Baseurl from "../../components/baseurl/Baseurl.component";

export default function View(props){
    const navigate =useNavigate();
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

    
    return(
        <Base>
                
          <section className="p-3">
             <div className="card">
                <h3>User Detail</h3>
                <div className="form">
                    
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <strong>User Name:</strong>
                        <p>{inputs.name}</p>
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <strong>Email:</strong>
                        <p>{inputs.email}</p>
                     </div>
                     </div>
                   </div>
                     
                  
                   <br/>
                  
                   
                   
                </div>
             </div>
          </section>
          
        </Base>
    );
}