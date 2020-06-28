import React, {Component} from 'react';

import cloudinary from 'cloudinary-react';

//database
import db from '../../database/database';

import './style.css';

class Form extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            phone: '',
            festival: '',
            date: '',
            notes: '',
            image: '',
            public_id: '',
            lowercaseName: '',
            invalidName: false,
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            invalidName: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(this.state.name==='') {
            this.setState({
                invalidName: true
            })
        } else { 
            //generate random id
            let id = Math.floor(Math.random() * 10000000000000)            

            //add new friend to database on submit
            db.friends.add({
                id: id,
                name: this.state.name,
                phone: this.state.phone,
                festival: this.state.festival,
                date: this.state.date,
                notes: this.state.notes,
                lowercaseName: this.state.name.toLowerCase(),
                lowercaseFestival: this.state.festival.toLowerCase(),
                image: this.state.image
            })
            
            this.setState({isSubmitted: true})
            window.location.reload();
        }
        
    }

    uploadWidget = (event) => {
        event.preventDefault()
        window.cloudinary.openUploadWidget({ 
            cloud_name: 'sarahm16', 
            upload_preset: 'gvezom1v', 
            sources: ['camera', 'local'],
            cropping: true,
            multiple: false
        },
        (error, result) => {
            if(error) {console.log(error)}
            else {
                console.log(result[0])
                this.setState({
                    image: result[0].url,
                    public_id: result[0].public_id
                })
            }
        });
    }

    removeImage = () => {
        this.setState({
            image: ''
        })
        // window.cloudinary.destroy('eghctwwaan1yvvjz8kj7', function(error,result) {
        //     console.log(result, error) });
    }

    render() {
        let addText;
        console.log(this.props.placeholders)
        console.log(this.props.edit)
        this.props.edit !== false ?  addText='Save Changes' : addText='Add Friend';
        return(
        <div aria-labelledby="headingOne">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" 
                        placeholder={this.props.edit !== false ? this.props.placeholders.name : 'Name'}
                        onChange={this.onChange}
                        value={this.state.name}/>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-6'>
                            <input type="text" className="form-control" id="phone"
                            placeholder={this.props.edit !== false ? this.props.placeholders.phone : "Phone"}
                            onChange={this.onChange}
                            value={this.state.phone}/>
                        </div>
                        <div className='form-group col-6'>
                            <input type='date' className="form-control" id="date"
                            placeholder={this.props.edit !== false ? this.props.placeholders.date : "Date"}
                            onChange={this.onChange}
                            value={this.state.date}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="festival"
                        placeholder={this.props.edit !== false ? this.props.placeholders.festival : 'Festival'}
                        onChange={this.onChange}
                        value={this.state.festival}/>
                    </div>
                
                    <textarea className='notes form-control' id='notes'
                        placeholder={this.props.edit !== false ? this.props.placeholders.notes : 'Notes'}
                        onChange={this.onChange}
                        //value={this.state.edit !== false ? this.props.placeholders.notes : this.state.notes}
                        value={this.state.notes}>
                    </textarea>
                    
                    {this.state.image !== '' &&
                        <div className='thumbnail'><img
                            src={this.state.image}
                            // src='https://res.cloudinary.com/sarahm16/image/upload/v1592606251/dxu6wdn3kyzzdiavjyyl.jpg' 
                            alt='thumbnail'
                            style={{width: '150px'}}
                        />
                        <button id='x' className='btn btn-danger' onClick={this.removeImage}>X</button>
                    </div>}
                    
                    <button className='btn btn-primary w-100' id='upload' onClick={this.uploadWidget}><i className="fa fa-image"></i> Upload Photo</button>
                    <button className='btn btn-info w-100' type='submit' onClick={this.handleSubmit}
                        style={{
                            opacity: this.state.image==='' ? '30%' : '100%'}}
                    >{addText}</button>
                </form>
                
                {this.state.invalidName && <div className="alert alert-danger" role="alert">
                    Please enter a name!
                </div>}
                {this.state.isSubmitted && <div className="alert alert-success" role="alert">
                    Friend has been added!
                </div>}
            </div>
        </div>
        )}


}

export default Form;