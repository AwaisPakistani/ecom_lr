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
import { NavLink } from "react-bootstrap";

const Sidebar = () => {
    return (
       

          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
            USERNAME
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
                    <NavLink href="/contact">
                    Dashboard
                    </NavLink>
                  
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem
                  icon="sticky-note"
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                >
                  Components
                </CDBSidebarMenuItem>

                
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      new
                    </CDBBadge>
                  }
                  icon="th"
                >
                  Categories
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