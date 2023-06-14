import React from "react";
import Base from "../layout/Base.Component";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Baseurl from "../../components/baseurl/Baseurl.component";
import moment from 'moment';

function Category(){
    const {http,noapi_http} = Baseurl();
    const [category,setCategory] = useState([]);
    const imgstyle={
      "width":"50px",
      "height":"50px"
    }
   
    const categories =()=>{
       http.get('/categories').then((res)=>{
        setCategory(res.data.categories);
       })
       
    }
    const deletecategory =(id)=>{
       http.delete('/category/delete/'+id).then((res)=>{
           alert(res.data.message);
           categories();
       })
       
    }
    //deleteadmin
    useEffect(()=>{
        categories();
    },[])
  return(
    <Base>
    <div className="p-3">
    <div className="row">
       <div className="col-md-6 text-start">
         <h2>Categories</h2>
       </div>
       <div className="col-md-6 text-end">
         <Link className="btn btn-success" to={{pathname:'/add/category'}}>Create</Link>
       </div>
    </div>
         
         <table className="table">
             <thead>
                 <th>Sr#</th>
                 <th>Name</th>
                 <th>Image</th>
                 <th>Created At</th>
                 <th>Action</th>
             </thead>
             <tbody>
             {
                 category.map((obj,index)=>(
                    <tr>
                      <td>{++index}</td>
                      <td>{obj.name}</td>
                      <td>
                        <img style={imgstyle} src={noapi_http+obj.image} />
                        
                      </td>
                      <td>
                          {
                         moment(obj.created_at).format('MMMM Do,YYYY')
                          }
                      </td>
                      <td>
                         <Link className="btn btn-primary" to={{pathname:"/editcategory/"+obj.id}}>Edit</Link>&nbsp;
                         <Link className="btn btn-info" to={{pathname:"/showcategory/"+obj.id}}>View</Link>&nbsp;
                         <button className="btn btn-danger" onClick={()=>deletecategory(obj.id)}>Delete</button>
                      </td>
                    </tr>
                 ))
             }
             </tbody>
             <tfoot>
                 <th>Sr#</th>
                 <th>Name</th>
                 <th>Image</th>
                 <th>Created At</th>
                 <th>Action</th>
             </tfoot>
         </table>
     </div>
    </Base>
  );
}
export default Category;