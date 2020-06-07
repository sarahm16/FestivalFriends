import React, { Component } from 'react';

import { get } from 'idb-keyval';

class Contact extends Component {
    constructor() {
        super();
        this.state={
            festival: '',
            phone: '',
            notes: '',
            id: ''
        }
    }

    componentDidMount() {
        get(this.props.name).then(res => {
            this.setState({
                festival: res.festival,
                phone: res.phone,
                notes: res.notes
            })
        })
    }

    onClick = () => {
        console.log('pressed delete button')
    }

    render() {
        return(
            // <div className='row'>
            //     <div className='col-6'>{props.name}</div>
            //     <div className='col-6'><button>Delete</button></div>
            // </div>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className='row'>
                        <div className="col-6 text-left">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {this.props.name}
                            </button>
                        </div>
                        <div className='col-6 text-right'>
                            <button id={this.state.id} onClick={this.onClick}>
                                Delete
                                {/* <i className="fas fa-trash-alt"></i> */}
                            </button>
                        </div>
                        </div>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            Festival: {this.state.festival} <br />
                            Phone: {this.state.phone} <br />
                            Notes: {this.state.notes}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;