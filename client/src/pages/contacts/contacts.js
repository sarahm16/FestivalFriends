import React, {Component} from 'react';
import {keys, get} from 'idb-keyval';

import Contact from '../../components/contact';
import Navbar from '../../components/navbar';

import './style.css';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        keys().then(keys => {
            this.setState({
                contacts: keys
            })
        })
    }

    //render new contact for each key from database

    render() {
        console.log('this.state.contacts: ' + this.state.contacts);
        return(
            <div>
                <Navbar currentPage='contacts' />
                <div className='container'>
                    {this.state.contacts.map(contact => {
                        return <Contact id={contact} />
                    })} 
                </div>
            </div>
        )
    }
}

export default Contacts