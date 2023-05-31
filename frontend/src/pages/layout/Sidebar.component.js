import React from "react";
import './layout.styles.css';

const Sidebar=()=>(
    <div className="sidebar text-start">
        <ul>
            <li className="active">Authentication
                <ul>
                    <li>
                        Permissions
                    </li>
                    <li>
                        Roles
                    </li>
                    <li>
                        User
                    </li>
                </ul>
            </li>
            <li>Category</li>
            <li>Brands</li>
            <li>Products</li>

        </ul>
    </div>
);
export default Sidebar;