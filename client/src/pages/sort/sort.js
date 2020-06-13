import React, {Component} from 'react';

//components
import Contacts from '../contacts/contacts';

//style
import './style.css';

class Sort extends Component {
    constructor() {
        super();
        this.state={
            sort: ''
        }
    }
    
    render() {
        return(
            <div>
                <div className='sort-options'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Alphabetically</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Sort by Festival</label>
                    </div>
                </div>
                <div className='container'>
                    <Contacts search=''/>
                </div>
            </div>
        )
    }
}

export default Sort;