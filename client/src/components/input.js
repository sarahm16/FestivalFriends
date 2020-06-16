import React, { Component } from 'react';

import db from '../database/database';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }

    handleChange(event) {
        // let reader = new FileReader();
        // reader.readAsDataURL(event.target.files[0]);
        // reader.onload = (event) => {
        //     console.log(reader.result)
        // }
        
        console.log(URL.createObjectURL(event.target.files[0]))
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })

        db.friends.add({
            id: '1',
            name: URL.createObjectURL(event.target.files[0])
        })
        
    }

    render() {
        return (
            <div>
                {/* <input type="file" onChange={this.handleChange}/> */}
                <label className="btn btn-primary">
                    <i className="fa fa-image"></i> Upload image<input type="file" style={{display: 'none'}}  name="image" onChange={this.handleChange}/>
                </label>
                {this.state.file !== null && <img src={this.state.file} style={{width: '200px'}} alt='contact'/>}
            </div>
        );
    }
}

export default Input;