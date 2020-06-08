import React, {Component} from 'react';
import {keys, set} from 'idb-keyval';

import Contact from '../../components/contact';
import Navbar from '../../components/navbar';

import './style.css';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            show: false,
            contact: {
                name: '',
                phone: '',
                festival: '',
                date: '',
                notes: ''
            }
        }
    }

    componentDidMount() {
        keys().then(keys => {
            let sortedKeys = keys.sort();
            this.setState({
                contacts: sortedKeys
            })
        })
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }

    onChange = (event) => {
        console.log(event.target.value)
        this.setState({ [event.target.id]: event.target.value})
    }

    handleSubmit = () => {
        console.log('added a friend')
        //generate random id
        let id = Math.floor(Math.random() * 1000000000)
        //create contact from form
        console.log(this.state.contact)
        let contact = this.state.contact
        set(id, contact)
        //set random id to contact in idb keyvalue database
    }

    //render new contact for each key from database

    render() {
        console.log('this.state.contacts: ' + this.state.contacts);
        return(
            <div>
                <Navbar currentPage='contacts' />
                
                <div className='container'>
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <div className='row'>
                                <div className="col-12 text-left">
                                    <button onClick={this.toggle} className="btn btn-link" data-toggle="collapse" data-target='#collapseOne' aria-expanded="true" aria-controls="collapseOne">
                                    <i className="fas fa-plus-circle add-icon"></i> Add Friend
                                    </button>
                                </div>
                            </div>
                        </div>

                    {this.state.show && <div aria-labelledby="headingOne">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    {/* <label for="name">Name</label> */}
                                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
                                </div>
                                <div className='form-row'>
                                    <div className='form-group col-6'>
                                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" onChange={this.onChange} value={this.state.phone}/>
                                    </div>
                                    <div className='form-group col-6'>
                                        <input type="text" className="form-control" id="date" placeholder="Date" onChange={this.onChange} value={this.state.date}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label for="festival">Festival you met at:</label> */}
                                    <input type="text" className="form-control" id="festival" placeholder="Festival" onChange={this.onChange} value={this.state.festival}/>
                                </div>
                            
                                <textarea className='notes' id='notes' placeholder='Notes' onChange={this.onChange} value={this.state.notes}></textarea>
                                <br />
                                <button type='submit' onClick={this.handleSubmit}>Add</button>
                            </form>
                        </div></div>}
                    </div>

                    {this.state.contacts.map(contact => {
                        return <Contact id={contact} />
                    })} 
                </div>
            </div>
        )
    }
}

export default Contacts