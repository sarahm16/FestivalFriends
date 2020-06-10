import React, { Component } from 'react';
import { set } from 'idb-keyval';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }

    handleChange(event) {
        console.log(URL.createObjectURL(event.target.files[0]))
        set('image', URL.createObjectURL(event.target.files[0]));
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        
        return (
            <div>
                <input type="file" onChange={this.handleChange}/>
                <img src={this.state.file} style={{width: '200px'}}/>
            </div>
        );
    }
}

export default Input;