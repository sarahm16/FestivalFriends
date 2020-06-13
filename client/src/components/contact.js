import React, { Component } from 'react';

import db from '../database/database';

class Contact extends Component {
    constructor() {
        super();
        this.state={
            show: false
        }
    }

    onClick = () => {
        db.friends.delete(this.props.id)
        window.location.reload();
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className='row'>
                            <div className="col-10 text-left">
                                <button onClick={this.toggle} className="btn btn-link" aria-expanded="true" >
                                    {this.props.name}
                                </button>
                            </div>
                            <div className='col-2 text-right'>
                                <button onClick={this.onClick} className='delete'>
                                    <i className="fas fa-trash-alt delete-icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {this.state.show && <div  aria-labelledby="headingOne">
                        <div className="card-body">
                            <div className='row'>
                                    Festival: {this.props.festival} <br />                                
                                    Phone: {this.props.phone}                                
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