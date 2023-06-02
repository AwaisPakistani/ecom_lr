import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout=()=>{
    const navigate=useNavigate();
    function logout(){
        sessionStorage.clear();
        navigate('/admin/login');
    }
    useEffect(()=>{
        logout();
    },[])
}
export default Logout;