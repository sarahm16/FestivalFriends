import React, {Component} from 'react';
import {keys, set} from 'idb-keyval';

//components
import Contact from '../../components/contact';
import Navbar from '../../components/navbar';
import Input from '../../components/input';

//database
import db from '../../database/database';

//style
import './style.css';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            show: false,
            name: '',
            phone: '',
            festival: '',
            date: '',
            notes: '',
            invalidName: false,
            isSubmitted: false
        }
    }

    async componentDidMount() { 
        //sort contacts from friends db, set to state of component
        const sortedContacts = await db.friends.orderBy('name').toArray()
        this.setState({
            contacts: sortedContacts
        })
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            invalidName: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(this.state.name==='') {
            this.setState({
                invalidName: true
            })
        } else { 
            //generate random id
            let id = Math.floor(Math.random() * 10000000000000)            

            //add new friend to database on submit
            db.friends.add({
                id: id,
                name: this.state.name,
                phone: this.state.phone,
                festival: this.state.festival,
                date: this.state.date,
                notes: this.state.notes
            })
            
            this.setState({isSubmitted: true})
        }
        window.location.reload();
    }

    //render new contact for each key from database
    render() {
        console.log(this.state.contacts)
        return(
            <div>
                <Navbar currentPage='contacts' />
                <div className='container'>
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <div className='row'>
                                <div className="col-12">
                                    <button onClick={this.toggle} className="btn btn-link add-contact" data-toggle="collapse" data-target='#collapseOne' aria-expanded="true" aria-controls="collapseOne">
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
                            <Input />
                            {this.state.invalidName && <div className="alert alert-danger" role="alert">
                                Please enter a name!
                            </div>}
                            {this.state.isSubmitted && <div className="alert alert-success" role="alert">
                                Friend has been added!
                            </div>}
                        </div>
                        </div>}
                    </div>

                    {this.state.contacts.map(contact => {
                        
                        return <Contact
                            id={contact.id}
                            name={contact.name}
                            festival={contact.festival}
                            notes={contact.notes}
                            phone={contact.phone} />
                    })}                    
                </div>
            </div>
        )
    }
}

export default Contacts