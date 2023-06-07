import React,{Component} from "react";
import './home.styles.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Base from "../layout/Base.Component";
import { Badge } from "react-bootstrap";
import Baseurl from "../../components/baseurl/Baseurl.component";

function Home(){
       //let message = sessionStorage.getItem('message');
       const {user} = Baseurl();
       const {message}= Baseurl();
       const [show, setShow] = useState(true);
        return(
          <Base>
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
              Welcome dear&nbsp;
              <span style={{color:'red'}}>
              {
                user?
                <>
                
                {user.name}

                </>:null
              }</span>!
              </Alert.Heading>
              &nbsp;
              {message}
      </Alert>



              
              
             
              
          </Base>
        );

    
}
export default Home;