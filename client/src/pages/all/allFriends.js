import React, { Component } from 'react';

import Contacts from '../contacts/contacts';
import Navbar from '../../components/navbar';

class AllFriends extends Component {

    render() {
        return(
            <div>
                <div className='container'>
                    <Contacts search='' />
                </div>
            </div>
        )
    }
}

export default AllFriends