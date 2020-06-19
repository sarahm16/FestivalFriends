import React from 'react';
import { Link } from 'react-router-dom';

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

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <ul className="navbar-nav">
        //             <div className='row'>
        //                 <div className='col-5'>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/all">View All<span className="sr-only">(current)</span></a>
        //                     </li>
        //                 </div>
        //                 {/* <div className='col-4'>
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                             Sort
        //                         </a>
        //                         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                             <a className="dropdown-item" href="/contacts">Alphabetically</a>
        //                             <a className="dropdown-item" href="/contacts">By Festival</a>
        //                         </div>
        //                     </li>
        //                 </div>                         */}
        //                 <div className='col-4'>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/sort">Sort<span className="sr-only">(current)</span></a>
        //                     </li>
        //                 </div>
        //                 <div className='col-3'>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/search">Search <span className="sr-only">(current)</span></a>
        //                     </li>
        //                 </div>
        //             </div>
        //         </ul>
        //     {/* </div> */}
        // </nav>

        <nav className='navbar navbar-light bg-light'>
            <ul className='nav nav-tabs w-100'>
                <li><h4>FestivalFriends</h4></li>
                <li className='nav-item ml-auto all'>
                    <Link to='/all' className={props.currentPage==='all' ? 'nav-link active' : 'nav-link'}>All</Link>
                </li>
                <li className='nav-item ml-auto'>
                    <Link to='/search' className={props.currentPage==='search' ? 'nav-link active' : 'nav-link'}>Search</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;