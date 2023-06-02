import React,{Component} from "react";
import './home.styles.css';
import Base from "../layout/Base.Component";
import { Badge } from "react-bootstrap";

function Home(){
       let user = sessionStorage.getItem('user');
        return(
          <Base>
              <h2>Dashboard</h2>
              Welcome dear,
              {
                user?
                <>
                {user.name}
                </>
                :null
              }
              
          </Base>
        );

    
}
export default Home;