import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Baseurl(){
    const navigate =useNavigate();

    const getToken=()=>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser=()=>{
        const userString = sessionStorage.getItem('user');
        const userDetail = JSON.parse(userString);
        return userDetail;
    }

    const [token,setToken]=useState(getToken());
    const [user,setUser]=useState(getUser());

    const saveToken=(user,token)=>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        
        navigate('/');
    }

    const http = axios.create({
        baseURL : "http://127.0.0.1:8000/api",
        Headers :{
            "Content-type" : "application/json"
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}