import React, {Component} from 'react';
import Contact from '../../components/contact';

class Contacts extends Component {

    //render new contact 

    render() {
        return(
            <div className='container'>
                Welcome to the contacts page!
                <Contact name='Sarah'/>
                
            </div>
        )
    }
}

export default Contacts