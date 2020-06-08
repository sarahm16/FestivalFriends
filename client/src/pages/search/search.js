import React, {Component} from 'react';

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