import React, { Component } from 'react';

import Contacts from '../contacts/contacts';

class AllFriends extends Component {
    constructor() {
        super();
        this.state={
            sort: 'alphabetical'
        }
    }
    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
        console.log(event.target.value)
    }

    render() {
        return(
            <div>
                <div className='container'>
                    <select value={this.state.sort} onChange={this.onChange} id='sort' className="form-control form-control-sm">
                        <option value='alphabetical'>Alphabetically</option>
                        <option value='festival'>By Festival</option>
                    </select>
                </div>
                <Contacts search='' />
            </div>
        )
    }
}

export default AllFriends