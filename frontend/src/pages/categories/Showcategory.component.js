import React from "react";
import { useNavigate ,useParams} from 'react-router-dom';
import './category.styles.css';
import Base from "../layout/Base.Component";
import { useEffect,useState } from "react";
import Baseurl from "../../components/baseurl/Baseurl.component";

export default function Showcategory(props){
    const image={
        "width":"150px",
        "height":"150px"
    }
    const catname={
        "font-size":"1.5em"
    }
    const navigate =useNavigate();
    const [inputs,setInputs] = useState({});

    const {http,noapi_http} = Baseurl();
    const {id}= useParams();
    

    const fetchcategory=()=>{
        http.get('/category/show/'+id).then((res)=>{
            setInputs({
                name:res.data.name,
                image:res.data.image
            })
            
        });
    }
    useEffect(()=>{
        fetchcategory();
     },[])
   
    
    return(
        <Base>
                
          <section className="p-3">
             <div className="card">
                <h2>Category Detail</h2>
                <div className="form">
                    
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        
                        <span style={catname}>{inputs.name}</span>
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <img style={image} src={noapi_http+inputs.image}/>
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