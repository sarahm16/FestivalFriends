import React, {Component} from 'react';

//database
import db from '../../database/database';

//components
import Navbar from '../../components/navbar';

class Search extends Component {

    render() {
        return(
            <div>
                <Navbar currentPage='search' />
                <h2>Search component</h2>
            </div>
            
        )
    }
}

export default Search;