import React, { Component } from 'react';

import db from '../database/database';

import Form from './friendForm/friendForm';

class Contact extends Component {
    constructor(props) {
        super();
        this.state={
            show: false,
            phone: 'Phone',
            festival: 'Festival',
            name: '',
            notes: 'Notes',
            image: props.image,
            edit: false
        }
    }

    // checkEmptyString = (field) => {
    //     console.log(this.props.phone)
    //     if(this.props.field !== '') {
    //         this.setState({
    //             [field]: this.props.field
    //         })
    //     }
    // }

    componentDidMount() {

        //this.checkEmptyString('phone');

        // this.setState({
        //     phone: this.props.phone,
        //     festival: this.props.festival,
        //     notes: this.props.notes,
        //     name: this.props.name
        // })

        if(this.props.phone !== '') {
            this.setState({
                phone: this.props.phone
            })
        }
        if(this.props.festival !== '') {
            this.setState({festival: this.props.festival})
        }
        if(this.props.notes !== '') {
            this.setState({notes: this.props.notes})
        }
        this.setState({
            name: this.props.name,
            date: this.props.date
        })
    }

    onClick = (button) => {
        db.friends.delete(this.props.id)
        window.location.reload(); 
    }

    edit = () => {
        console.log('edited photo')
        this.setState({
            edit: !this.state.edit,
            show: false
        })
    }

    toggle = () => {
        this.setState({
            show: !this.state.show,
            edit: false
        })
    }

    render() {
        console.log(this.state.name)
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
                                <button onClick={this.edit} className='edit'>
                                    <i className="fas fa-edit"></i>
                                </button>

                                <button onClick={() => this.onClick('delete')} className='delete'>
                                    <i className="fas fa-trash-alt delete-icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {this.state.edit && <Form placeholders={this.state}/>}

                    {this.state.show && <div  aria-labelledby="headingOne">
                        <div className="card-body">
                            {this.props.image !== '' && <div className='row'>
                                <img src={this.props.image} alt='pic' style={{width: '100%', height: '75%'}}
                                />
                                <div className='festival'><h3>{this.state.festival}</h3></div>
                            </div>}
                            
                            <div className='row'>
                                    {/* Festival: {this.state.festival} <br />                                 */}
                                    <div className='col-6'>Ph: {this.state.phone}</div>
                                    <div className='col-6'>Date: {this.state.date}</div>                                
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