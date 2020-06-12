import React, {Component} from 'react';
import Contacts from '../pages/contacts/contacts';

class Container extends Component {
    constructor() {
        super();
        this.state={
            search: '',
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    onClick = (event) => {
        event.preventDefault();
        this.setState({isSubmitted: true})
    }

    render() {
        return(
            <div>
                {/* <div class="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input class="form-control" id='search' value={this.state.search} onChange={this.onChange} type="text" placeholder="Search" aria-label="Search" />
                </div> */}

                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id='search' value={this.state.search} onChange={this.onChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onClick}>Search</button>
                </form>
                {!this.state.isSubmitted && <Contacts search=''/>}
                {this.state.isSubmitted && <Contacts search={this.state.search} />}
            </div>
        )
    }

}

export default Container;