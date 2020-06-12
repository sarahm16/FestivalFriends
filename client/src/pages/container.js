import React, {Component} from 'react';
import Contacts from '../pages/contacts/contacts';

class Container extends Component {
    constructor() {
        super();
        this.state={
            search: '',
            criteria: '',
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    onClick = (event) => {
        console.log(event.target.id);
        let searchCriteria = event.target.id;
        event.preventDefault();
        this.setState({
            isSubmitted: true,
            criteria: searchCriteria
        })
    }

    render() {
        return(
            <div>
                {/* <div class="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input class="form-control" id='search' value={this.state.search} onChange={this.onChange} type="text" placeholder="Search" aria-label="Search" />
                </div> */}
                {/* <div className='row'>
                    <form className="form-inline">
                        <div className='col-9'>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id='search' value={this.state.search} onChange={this.onChange}/>
                        </div>
                        <div className='col-3'>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onClick}>Search</button>
                        </div>
                    </form>
                </div> */}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" id='friend' type='submit' onClick={this.onClick}>Friend</button>
                            <button className="dropdown-item" id='festival' type='submit' onClick={this.onClick}>Festival</button>
                            {/* <button className="dropdown-item" href="#">Phone</button> */}
                        </div>
                    </div>
                    <input id='search' value={this.state.search} onChange={this.onChange} type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>

                {!this.state.isSubmitted && <Contacts search=''/>}
                {this.state.isSubmitted && <Contacts search={this.state.search} criteria={this.state.criteria} />}
            </div>
        )
    }

}

export default Container;