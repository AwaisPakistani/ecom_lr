import React from "react";
import Header from "./Header.component";
import Footer from "./Footer.component";
import Sidebar from "./Sidebar.component";
import './layout.styles.css';
const Base=({children})=>(
        
         <div>
         <Header/>
              <div className="row flex-nowrap">
               <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
               <Sidebar/>
               </div>
               
               <div class="col py-2 px-5 text-start">
               {children}
               </div>
               </div>
               
               
            
         
         <Footer/>
         </div>
    
);
export default Base;