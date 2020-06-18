import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return(
            <div className='dash-buttons'>
                <Link to='/contacts'><button>View Friends</button></Link><br />
                <Link to='/addfriend'><button>Add A Friend</button></Link>
            </div>
        )
    } 
}

export default Dashboard;