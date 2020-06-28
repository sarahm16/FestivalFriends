import React, {Component} from 'react';

//components
import Contact from '../../components/contact';
// import Navbar from '../../components/navbar';
// import Input from '../../components/input';
import Form from '../../components/friendForm/friendForm';

//database
import db from '../../database/database';

//style
import './style.css';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            show: false
        }
    }

    async componentDidMount() { 
        console.log('contacts criteria: ' + this.props.criteria)
        let criteria='';
        if(this.props.search === '') {
            if(this.props.sort === 'alphabetical') {
                //sort contacts from friends db, set to state of component
                const sortedContacts = await db.friends.orderBy('lowercaseName').toArray()
                this.setState({
                    contacts: sortedContacts
                })
            }
            else {
                const sortedContacts = await db.friends.orderBy('lowercaseFestival').toArray();
                this.setState({
                    contacts: sortedContacts
                })
            }
            
        } else {
            if(this.props.criteria==='Friend') {criteria='name'} else {criteria='festival'}
            const filteredContacts = await db.friends.where(criteria).equalsIgnoreCase(this.props.search).toArray();
            this.setState({contacts: filteredContacts})
        }       
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }

    //render new contact for each key from database
    render() {
        return(
            <div>
                <div className='container contacts'>
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

                        {this.state.show && <Form edit={false}/>}                       
                    </div>

                    {/* create contact component for each object in array */}
                    {this.state.contacts.map(contact => {
                        return <Contact
                            image={contact.image}
                            key={contact.id}
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