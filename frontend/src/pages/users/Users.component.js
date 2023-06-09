import React, { useEffect,useState } from "react";
import Base from "../layout/Base.Component";
import Baseurl from "../../components/baseurl/Baseurl.component";
import { Link } from "react-router-dom";
function Users(){
 const {http} = Baseurl();
 const [admin,setAdmin] = useState([]);

 const admins =()=>{
    http.get('/admin/users').then((res)=>{
       setAdmin(res.data.users);
    })
    
 }
 const deleteadmin =(id)=>{
    http.delete('/admin/'+id).then((res)=>{
        alert(res.data.msg);
        admins();
    })
    
 }
 //deleteadmin
 useEffect(()=>{
    admins();
 },[])
 return (
   <Base>
   <div className="p-3">
   <div className="row">
      <div className="col-md-6 text-start">
        <h2>Users</h2>
      </div>
      <div className="col-md-6 text-end">
        <Link className="btn btn-success" to={{pathname:'/admin/register'}}>Create</Link>
      </div>
   </div>
        
        <table className="table">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Action</th>
            </thead>
            <tbody>
            {
                admin.map((obj,index)=>(
                   <tr>
                     <td>{++index}</td>
                     <td>{obj.name}</td>
                     <td>{obj.email}</td>
                     <td>
                         {
                        obj.created_at
                         }
                     </td>
                     <td>
                        <Link className="btn btn-primary" to={{pathname:"/edituser/"+obj.id}}>Edit</Link>&nbsp;
                        <Link className="btn btn-info" to={{pathname:"/showuser/"+obj.id}}>View</Link>&nbsp;
                        <button className="btn btn-danger" onClick={()=>deleteadmin(obj.id)}>Delete</button>
                     </td>
                   </tr>
                ))
            }
            </tbody>
            <tfoot>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Action</th>
            </tfoot>
        </table>
    </div>
   </Base>
 );
}
export default Users;