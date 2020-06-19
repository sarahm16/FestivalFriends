import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

//components
import Contacts from '../contacts/contacts';
import Navbar from '../../components/navbar';

//style
import './style.css';

class Sort extends Component {
    constructor() {
        super();
        this.state={
            sort: 'festival'
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }
    
    render() {
        return(
            <div>                
                <Navbar currentPage='all' />
                <div className='container'>
                    <select value={this.state.sort} onChange={this.onChange} id='sort' className="form-control form-control-sm">
                        <option value='festival'>By Festival</option>
                        <option value='alphabetical'>Alphabetically</option>
                    </select>
                </div>
                {this.state.sort==='alphabetical' && <Redirect to='/all' />}
                <Contacts search='' sort='festival' />
            </div>
        )
    }
}

export default Sort;