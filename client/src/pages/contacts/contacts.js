import React, {Component} from 'react';
import {keys, get} from 'idb-keyval';

import Contact from '../../components/contact';
import Navbar from '../../components/navbar';

import './style.css';

async function getFriend(contact) {
    const friend = await get(contact)
    return friend;
}

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        keys().then(keys => {
            console.log(keys)
            this.setState({contacts: keys})
        });
    }

    //render new contact for each key from database

    render() {
        console.log('this.state.contacts: ' + this.state.contacts);
        return(
            <div>
                <Navbar currentPage='contacts' />
                <div className='container'>
                    {this.state.contacts.map(contact => {
                        return <Contact name={contact} />
                    })} 
                </div>
            </div>
        )
    }
}

export default Contacts