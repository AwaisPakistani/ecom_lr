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
    const getMessage=()=>{
        const messageString = sessionStorage.getItem('message');
        const messageDetail = JSON.parse(messageString);
        return messageDetail;
    }

    const [token,setToken]=useState(getToken());
    const [user,setUser]=useState(getUser());
    const [message,setMessage]=useState(getMessage());

    const saveToken=(user,token,loginmessage)=>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        sessionStorage.setItem('message',JSON.stringify(loginmessage));

        setToken(token);
        setUser(user);
        setMessage(loginmessage);
        navigate('/');
    }

    const http = axios.create({
        baseURL : "http://127.0.0.1:8000/api",
        Headers :{
            "Content-type" : "application/json"
        }
    });
    const noapi_http = 'http://127.0.0.1:8000/';
    return {
        setToken:saveToken,
        token,
        user,
        message,
        getToken,
        noapi_http,
        http
    }
}