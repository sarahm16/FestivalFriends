import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Navbar(props) {
    
    return(
        <nav className='navbar navbar-light bg-light'>
            <ul className='nav nav-tabs w-100'>
                <li><h4 className='rainbow-text'>FestivalFriends</h4></li>

                <li className='nav-item ml-auto'>
                    <Link to='/search' className={props.currentPage==='search' ? 'nav-link active' : 'nav-link'}>Search</Link>
                </li>
                <li className='nav-item ml-auto all'>
                    {/* <Link to='/all' className={props.currentPage==='all' ? 'nav-link active' : 'nav-link'}>All</Link> */}
                    <Link to='/add'><i className="fas fa-plus-circle add-icon"></i>Add</Link>
                </li>                
            </ul>
        </nav>
    )
}

export default Navbar;