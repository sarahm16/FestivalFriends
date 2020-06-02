import React, {Component} from 'react';
import Contact from '../../components/contact';

import './style.css';

class Contacts extends Component {

    //render new contact 

    render() {
        return(
            <div className='container'>
                Welcome to the contacts page!
                <Contact name='Sarah'/>
                <Contact name='Jonathon' />
                <Contact name='Ben' />

                <br /> <br />

                <div className='row add-contact'>
                    <div className='col-12'><button>Add Contact</button></div>
                </div>
            </div>
        )
    }
}

export default Contacts