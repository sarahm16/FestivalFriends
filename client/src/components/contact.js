import React, { Component } from 'react';

import db from '../database/database';

class Contact extends Component {
    constructor() {
        super();
        this.state={
            show: false,
            phone: 'No phone number saved',
            festival: 'No festival saved'
        }
    }

    onClick = (button) => {
        if(button === 'delete') {
            db.friends.delete(this.props.id)
            window.location.reload();
        }
        else {
            console.log('edited a photo')
        } 
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }

    componentDidMount() {
        if(this.props.phone !== '') {
            this.setState({
                phone: this.props.phone
            })
        }
        if(this.props.festival !== '') {
            this.setState({festival: this.props.festival})
        }
    }

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className='row'>
                            <div className="col-8 text-left">
                                <button onClick={this.toggle} className="btn" aria-expanded="true" >
                                    {this.props.name}
                                </button>
                            </div>
                            <div className='col-4 text-right'>
                                <button onClick={() => this.onClick('edit')} className='edit'>
                                    <i className="fas fa-edit"></i>
                                </button>

                                <button onClick={() => this.onClick('delete')} className='delete'>
                                    <i className="fas fa-trash-alt delete-icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {this.state.show && <div  aria-labelledby="headingOne">
                        <div className="card-body">
                            {this.props.image !== '' && <div className='row'>
                                <img src={this.props.image} alt='pic' style={{width: '100%', height: '75%'}}/>
                            </div>}
                            <div className='row'>
                                    Festival: {this.state.festival} <br />                                
                                    Phone: {this.state.phone}                                
                            </div>
                            
                            <div className='row'>
                                <div className='col-12 notes'>Notes: {this.props.notes}</div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Contact;