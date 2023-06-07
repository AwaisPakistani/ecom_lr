import React,{Component} from "react";
import './home.styles.css';
import Base from "../layout/Base.Component";
import { Badge } from "react-bootstrap";
import Baseurl from "../../components/baseurl/Baseurl.component";

function Home(){
       let message = sessionStorage.getItem('message');
       const {user} = Baseurl();
       
        return(
          <Base>
          
              <h2>Dashboard</h2>
              Welcome dear&nbsp;
              
              {
                user?
                <>
                
                {user.name}

                </>:null
              }
              
          </Base>
        );

    
}
export default Home;