import React, {Component} from 'react';

import db from '../../database/database';

import Navbar from '../../components/navbar';

class Search extends Component {

    // componentDidMount() {
    //     db.friends.put({name: 'Sarah', age: '27'})
    // }


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