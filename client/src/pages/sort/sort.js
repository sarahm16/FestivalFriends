import React, {Component} from 'react';

//components
import Navbar from '../../components/navbar';
import Contacts from '../contacts/contacts';

//style
import './style.css';

class Sort extends Component {
    constructor() {
        super();
        this.state={
            sort: ''
        }
    }
    
    render() {
        return(
            <div>
                <div className='sort-options'>Sort by: </div>
                <div className='container'>
                    <Contacts search=''/>
                </div>
            </div>
        )
    }
}

export default Sort;