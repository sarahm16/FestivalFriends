import React, {Component} from 'react';

class AddFriend extends Component {

    render() {
        return(
            <form>
                <div className="row">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
            </form>
        )
    }
}

export default AddFriend;