import React, {Component} from 'react';

//components
import Contacts from '../contacts/contacts';
import Navbar from '../../components/navbar';

//style
import './style.css';

//testing testing

class Search extends Component {
    constructor() {
        super();
        this.state={
            search: '',
            criteria: 'Friend',
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            isSubmitted: false
        })
    }

    onClick = (event) => {
        console.log(event.target.id);
        let searchCriteria = event.target.id;
        event.preventDefault();
        this.setState({
            // isSubmitted: true,
            criteria: searchCriteria
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isSubmitted: true
        })
    }

    render() {
        return(
            <div>
                <Navbar currentPage='search' />
            <div className='container search'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button id='searchToggle' className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.criteria}</button>
                        <div className="dropdown-menu">
                            {this.state.criteria==='Festival' && <button className="dropdown-item" id='Friend' onClick={this.onClick}>Friend</button>}
                            {this.state.criteria==='Friend' && <button className="dropdown-item" id='Festival' onClick={this.onClick}>Festival</button>}
                            {/* <button className="dropdown-item" href="#">Phone</button> */}
                        </div>
                    </div>
                    <input id='search' value={this.state.search} onChange={this.onChange} type="text" placeholder='Search' className="form-control" aria-label="Text input with dropdown button" />
                    <div className='input-group-append'>
                        <button id='submitSearch' type='submit' onClick={this.onSubmit}><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>

                {!this.state.isSubmitted && <Contacts search='' sort='alphabetical' />}
                {this.state.isSubmitted && <Contacts search={this.state.search} sort='alphabetical' criteria={this.state.criteria} />}
            </div>
            
        )
    }
}

export default Search;