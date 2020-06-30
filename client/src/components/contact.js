import React, { Component } from 'react';

import db from '../database/database';

import Form from './friendForm/friendForm';

class Contact extends Component {
    constructor(props) {
        super();
        this.state={
            show: false,
            phone: '',
            festival: '',
            name: '',
            notes: '',
            image: props.image,
            edit: false
        }
    }

    checkEmptyString = (field) => {
        if(field !== '') {
            this.setState({[field]: field})
        }
        //field !== '' ? this.setState({[field]: field}) : this.setState({[field]: field.toString()})
    }

    componentDidMount() {
        //put this in the constructor?
        console.log('id: ' + this.props.id)
        const { phone, festival, notes, name, date, id } = this.props;
        this.setState({
            id: id,
            phone: phone,
            festival: festival,
            notes: notes,
            name: name,
            date: date
        })
    }

    delete = () => {
        db.friends.delete(this.props.id)
        window.location.reload(); 
    }

    edit = () => {
        this.setState({
            edit: !this.state.edit,
            show: false
        })
    }

    toggle = () => {
        this.state.edit ? this.setState({edit:false}) : this.setState({
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
                            <div className='col-4 text-right btn-group'>
                                <button onClick={this.edit} className='edit btn'>
                                    <i className="fas fa-edit"></i>
                                </button>

                                <button onClick={this.delete} className='delete btn'>
                                    <i className="fas fa-trash-alt delete-icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {this.state.edit && <Form placeholders={this.state} id={this.state.id} edit={true}/>}

                    {this.state.show && <div  aria-labelledby="headingOne">
                        <div className="card-body">
                            {this.props.image !== '' && <div className='row'>
                                <img src={this.props.image} alt='pic' style={{width: '100%', height: '75%'}}
                                />
                                <div className='festival'><h3>{this.state.festival}</h3></div>
                            </div>}

                            <div className='row'>
                                <div className='col-12 notes'>{this.props.notes}</div>
                            </div>
                            
                            <div className='row'>
                                    {/* Festival: {this.state.festival} <br />                                 */}
                                    <div className='col-6'><p className='phone'><i className="fas fa-phone"></i> {this.state.phone}</p></div>
                                    <div className='col-6'><p className='date'><i className="far fa-calendar-alt"></i> {this.state.date}</p></div>                                
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Contact;