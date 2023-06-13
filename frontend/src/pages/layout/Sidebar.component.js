import React from "react";
import './layout.styles.css';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
    CDBBadge,
    CDBIcon,
    CDBContainer
  } from 'cdbreact';
  import Baseurl from "../../components/baseurl/Baseurl.component";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const {user} = Baseurl();
    return (
       

          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
            {
                user?
                <>
                
                {user.name}

                </>:null
              }
            </CDBSidebarHeader>
  
            <CDBSidebarContent>
            
              <CDBSidebarMenu>
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                  icon="th-large"
                >
                    <Link to={{pathname:"/"}}>
                    Dashboard
                    </Link>
                  
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem
                  icon="sticky-note"
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                >
                  <Link to={{pathname:"/admins"}}>
                  Users
                    </Link>
                  
                </CDBSidebarMenuItem>

                
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                  icon="th"
                >
                  <Link to={{pathname:"/categories"}}>
                  Categories
                    </Link>
                  
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                  icon="th-large"
                >
                  Brands
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                  icon="th"
                >
                  Products
                </CDBSidebarMenuItem>
              </CDBSidebarMenu>
              
            </CDBSidebarContent>
  
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: '20px 5px',
                }}
              >
                Sidebar Footer
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        
    );
  };
export default Sidebar;