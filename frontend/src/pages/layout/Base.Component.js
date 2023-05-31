import React from "react";
import Header from "./Header.component";
import Footer from "./Footer.component";
import Sidebar from "./Sidebar.component";
import './layout.styles.css';
const Base=({children})=>(
        
         <div className="container-fluid base">
         <Header/>
            <div className="row">
               <div className="col-md-3">
               <Sidebar/>
               </div>
               <div className="col-md-9 text-start">
               {children}
               </div>
            </div>
         
         <Footer/>
         </div>
    
);
export default Base;