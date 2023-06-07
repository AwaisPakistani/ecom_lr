import React, { useEffect,useState } from "react";
import Base from "../layout/Base.Component";
import Baseurl from "../../components/baseurl/Baseurl.component";
function Users(){
 const {http} = Baseurl();
 const [admin,setAdmin] = useState([]);

 const admins =()=>{
    http.get('/admin/users').then((res)=>{
       setAdmin(res.data.users);
    })
    
 }
 useEffect(()=>{
    admins();
 },[])
 return (
   <Base>
        <h2>Users</h2>
        <table className="table">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Action</th>
            </thead>
            <tbody>
            {
                admin.map((obj,index)=>(
                   <tr>
                     <td>{index}</td>
                     <td>{obj.name}</td>
                     <td>
                         {
                          Date(obj.created_at)
                         }
                     </td>
                     <td>
                        <button className="btn btn-primary">Edit</button>&nbsp;
                        <button className="btn btn-danger">Delete</button>
                     </td>
                   </tr>
                ))
            }
            </tbody>
            <tfoot>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Action</th>
            </tfoot>
        </table>
   </Base>
 );
}
export default Users;