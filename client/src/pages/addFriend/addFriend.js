import React, {Component} from 'react';

import { set } from 'idb-keyval';

import './style.css';
import Navbar from '../../components/navbar';

class AddFriend extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            festival: '',
            date: '',
            notes: ''
        }
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
        let contact = this.state
        set(id, contact)
        //set random id to contact in idb keyvalue database
    }

    render() {
        return(
            <div>
                
            <Navbar currentPage='addFriend' />
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
            </div>
        )
    }
}

export default AddFriend;