import React, { Component } from 'react';

import { get, del } from 'idb-keyval';

class Contact extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            festival: '',
            phone: '',
            notes: '',
            show: false
        }
    }

    componentDidMount() {
        get(this.props.id).then(res => {
            this.setState({
                name: res.name,
                festival: res.festival,
                phone: res.phone,
                notes: res.notes
            })
        })
    }

    onClick = () => {
        del(this.props.id)
    }

    toggle = () => {
        this.setState({show: !this.state.show})
        console.log(this.state.show)
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
                                <button onClick={this.toggle} className="btn btn-link" data-toggle="collapse" data-target='#collapseOne' aria-expanded="true" aria-controls="collapseOne">
                                {this.state.name}
                                </button>
                            </div>
                            <div className='col-6 text-right'>
                                <button onClick={this.onClick} className='delete'>
                                    <i className="fas fa-trash-alt delete-icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                   

                    {this.state.show && <div id='collapseOne' className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            Festival: {this.state.festival} <br />
                            Phone: {this.state.phone} <br />
                            Notes: {this.state.notes}
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Contact;