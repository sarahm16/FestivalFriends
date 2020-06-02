import React from 'react';

function Contact(props) {
    return(
        <div className='row'>
            <div className='col-6'>{props.name}</div>
            <div className='col-6'><button>Delete</button></div>
        </div>
    )
}

export default Contact;