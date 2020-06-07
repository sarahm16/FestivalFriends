import React from 'react';

import './style.css';

function Navbar(props) {
    return(
        <div className='navbar'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                    href="/contacts"
                    // onClick={() => props.handlePageChange("About")}
                    className={props.currentPage === "contacts" ? "nav-link active" : "nav-link"}
                    >
                    View Friends
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="/addfriend"
                    //   onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "addFriend" ? "nav-link active" : "nav-link"}
                    >
                        Add Friend
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;