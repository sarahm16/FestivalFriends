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
        console.log(URL.createObjectURL(event.target.files[0]))
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        
        return (
            <div>
                {/* <input type="file" onChange={this.handleChange}/> */}
                <label class="btn btn-primary">
                    <i class="fa fa-image"></i> Upload image<input type="file" style={{display: 'none'}}  name="image" />
                </label>
                {this.state.file !== null && <img src={this.state.file} style={{width: '200px'}} alt='contact'/>}
            </div>
        );
    }
}

export default Input;