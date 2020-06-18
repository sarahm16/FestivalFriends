import React, { Component } from 'react';
import cloudinary from 'cloudinary-react';

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
    }

    uploadWidget() {
        // cloudinary.openUploadWidget({ cloud_name: 'sarahm16', upload_preset: 'gvezom1v', tags:['xmas']},
        //     function(error, result) {
        //         console.log(result);
        //     }); 
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-6'>
                        <label className="btn btn-primary">
                            <i className="fa fa-image"></i> Upload photo<input type="file" style={{display: 'none'}}  name="image" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className='col-6'>
                        <label className="btn btn-primary">
                            <i className="fas fa-camera"></i> Take photo<input type="file" style={{display: 'none'}}  name="image" onChange={this.handleChange}/>
                        </label> 
                    </div>
                </div>
                {this.state.file !== null && <img src={this.state.file} style={{width: '200px'}} alt='contact'/>}
            </div>
        );
    }
}

export default Input;