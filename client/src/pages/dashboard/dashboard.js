import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { keys } from 'idb-keyval';

class Dashboard extends Component {

    render() {
        return(
            <div className='dash-buttons'>
                <Link to='/contacts'><button>View Friends</button></Link><br />
                <button>Add A Friend</button>
            </div>
        )
    } 
}

export default Dashboard;