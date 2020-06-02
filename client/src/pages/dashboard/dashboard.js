import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return(
        <div className='dash-buttons'>
            <Link to='/contacts'><button>View Friends</button></Link><br />
            <button>Add A Friend</button>
        </div>
    )
}

export default Dashboard;