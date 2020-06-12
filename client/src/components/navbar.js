import React from 'react';

import './style.css';

function Navbar(props) {
    
    return(
        // <div className='navbar'>
        //     <ul className="nav nav-tabs">
        //         <li className="nav-item">
        //             <a
        //             href="/contacts"
        //             // onClick={() => props.handlePageChange("About")}
        //             className={props.currentPage === "contacts" ? "nav-link active" : "nav-link"}
        //             >
        //             View Friends
        //             </a>
        //         </li>
        //         {/* <li className="nav-item">
        //             <a
        //             href="/addfriend"
        //             //   onClick={() => props.handlePageChange("Home")}
        //             className={props.currentPage === "addFriend" ? "nav-link active" : "nav-link"}
        //             >
        //                 Add Friend
        //             </a>
        //         </li> */}
        //         <li className="nav-item">
        //             <a
        //             href="/search"
        //             //   onClick={() => props.handlePageChange("Home")}
        //             className={props.currentPage === "search" ? "nav-link active" : "nav-link"}
        //             >
        //                 Search
        //             </a>
        //         </li>
        //     </ul>
        // </div>



        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <div className='row'>
                        <div className='col-6'>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    View Friends
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/contacts">Alphabetically</a>
                                    <a className="dropdown-item" href="/contacts">Sort by Festival</a>
                                </div>
                            </li>
                        </div>
                        <div className='col-6'>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search <span className="sr-only">(current)</span></a>
                            </li>
                        </div>
                    </div>
                </ul>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;