import React, {Component} from 'react';

import Form from '../../components/friendForm/friendForm';
import Navbar from '../../components/navbar';

import './style.css';

class Add extends Component {
    
    render() {
        return(
            <div>
                <Navbar currentPage='add' />
                <div className='bg'></div>
                <div className='form'>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Add;