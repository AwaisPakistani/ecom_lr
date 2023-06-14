import React from "react";
import './category.styles.css';
import { useNavigate,useParams } from 'react-router-dom';
import Base from "../layout/Base.Component";
import { useEffect,useState } from "react";
import Baseurl from "../../components/baseurl/Baseurl.component";
import Category from "./Category.component";

export default function EditCategory(props){
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const navigate = useNavigate();
    //Errors
    const [nameError,setNameError] = useState('');
    const [imageError,setimageError] = useState('');
    const [successMsg,setSuccessmsg] = useState('');

    
    const {http,noapi_http} = Baseurl();
    const {id}= useParams();

    const hangleChange =(file)=>{
      setImage(file[0]);
    };

    const editcategory=((e)=>{
      e.preventDefault();
      const data= new FormData();
      data.append('name',name);
      data.append('image',image);
      http.put('/category/update/'+id,data).then((res)=>{
         if(res.data.status==false){
            setNameError(res.data.errors.name);
            setimageError(res.data.errors.image);
            setSuccessmsg(res.data.message);
            return <Category/>
            //navigate('/categories');
         }else{
            setSuccessmsg(res.data.message);
         }
      })
    })

    // fetch
    const fetchcategory=()=>{
        http.get('/category/edit/'+id).then((res)=>{
            setName(res.data.name);
            setImage(res.data.image); 
        });
    }
    useEffect(()=>{
        fetchcategory();
     },[])
    return(
        <Base>
                
          <section className="p-3"> 
             <div className="card">
                <h3>Update Category</h3>
                <h2 className="text-success">{successMsg}</h2>
                <div className="form">
                    
                   <form className="m-2 p-4" onSubmit={editcategory}>
                   <div className="row">
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Category Name</label>
                         <input className="form-control" type="text" name="name" placeholder="Enter Username"
                         value={name || ''}
                         onChange={e=>setName(e.target.value)} />
                         <span className="text-danger">{nameError}</span>
                     </div>
                     </div>
                     <div className="col-lg-6">
                     <div className="form-group">
                        <label>Image</label>
                         <input className="form-control" type="file" name="image"
                         onChange={e=>hangleChange(e.target.files)} />
                         
                         <span className="text-danger">{imageError}</span>
                         <img src={noapi_http+image} width="100px" height="100px"/>
                     </div>
                     </div>
                   </div><br/>
                     
                   
                   
                  
                     <div className="form-group">
                        <button type="button"
                         className="btn btn-primary" onClick={editcategory} >Update Category</button>
                     </div>
                   </form>
                </div>
             </div>
          </section>
          
        </Base>
    );
}