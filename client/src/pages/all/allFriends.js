import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Contacts from '../contacts/contacts';
import Navbar from '../../components/navbar';

class AllFriends extends Component {
    constructor() {
        super();
        this.state={
            sort: 'alphabetical'
        }
    }
    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return(
            <div>
                <Navbar currentPage='all' />
                <div className='container'>
                    <select value={this.state.sort} onChange={this.onChange} id='sort' className="form-control form-control-sm">
                        <option value='alphabetical'>Alphabetically</option>
                        <option value='festival'>By Festival</option>
                    </select>
                </div>
                {this.state.sort==='festival' && <Redirect to='/sort' />}
                <Contacts search='' sort='alphabetical' />
            </div>
        )
    }
}

export default AllFriends