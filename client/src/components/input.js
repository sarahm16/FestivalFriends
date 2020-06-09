import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }

    handleChange(event) {
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