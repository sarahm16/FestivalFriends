import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {keys} from 'idb-keyval';

import Contact from '../../components/contact';

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
            console.log(keys)
            this.setState({contacts: keys})
        });
    }

    //render new contact for each key from database

    render() {
        console.log('this.state.contacts: ' + this.state.contacts);
        return(
            <div className='container'>
                {this.state.contacts.map(contact => {
                    return <Contact name={contact} />
                })}
                <Contact name='Sarah'/>
                <Contact name='Jonathon' />
                <Contact name='Ben' />

                <br /> <br />

                <div className='row add-contact'>
                    <div className='col-12'>
                        <Link to='/addfriend'><button>Add Friend</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts