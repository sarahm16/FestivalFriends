import React, {Component} from 'react';

import cloudinary from 'cloudinary-react';

//database
import db from '../../database/database';

import './style.css';

class Form extends Component {
    constructor() {
        super();
        this.state={
            id: '',
            name: '',
            phone: '',
            festival: '',
            date: '',
            notes: '',
            image: '',
            public_id: '',
            lowercaseName: '',
            invalidName: false,
            isSubmitted: false,
            inputHeight: '50px'
        }
    }

    componentDidMount() {
        if(this.props.edit) {
            const { festival, date, phone, notes, name, image } = this.props.placeholders;
            this.setState({
                name: name,
                date: date,
                festival: festival,
                phone: phone,
                notes: notes,
                image: image,
                inputHeight: ''
            })
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            invalidName: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //delete previous contact if in edit mode, create new contact with edited info
        if(this.props.edit) {
            db.friends.delete(this.props.id)
        }

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
        // this.props.edit ? db.friends.where('image').equals(this.state.image).modify({image: ''}) :
        this.setState({
            image: ''
        })
        

        // window.cloudinary.destroy('eghctwwaan1yvvjz8kj7', function(error,result) {
        //     console.log(result, error) });
    }

    render() {
        const { festival, date, phone, notes, name } = this.state;
        let addText;
        this.props.edit ?  addText='Save Changes' : addText='Add Friend';
        return(
        <div aria-labelledby="headingOne">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" 
                        placeholder={this.props.edit && name !== '' ? name : 'Name'}
                        onChange={this.onChange}
                        value={this.state.name}
                        style={{height: this.state.inputHeight}}/>
                    </div>

                    <div className='form-row'>
                        <div className='form-group col-6'>
                            <input type="tel" pattern="^\d{2}-\d{3}$" className="form-control" id="phone"
                            placeholder={this.props.edit && phone !== '' ? phone : "Phone"}
                            onChange={this.onChange}
                            value={this.state.phone}
                            style={{height: this.state.inputHeight}}/>
                        </div>
                        <div className='form-group col-6'>
                            <input type='date' className="form-control" id="date"
                            // placeholder={this.props.edit !== false && date !== '' ? date : "Date"}
                            onChange={this.onChange}
                            value={this.state.date}
                            style={{height: this.state.inputHeight}}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="festival"
                        placeholder={this.props.edit && festival !== '' ? festival : "Festival"}
                        onChange={this.onChange}
                        value={this.state.festival}
                        style={{height: this.state.inputHeight}}/>
                    </div>
                
                    <textarea className='notes form-control' id='notes'
                        placeholder={this.props.edit !== false && notes !== '' ? notes : 'Notes'}
                        onChange={this.onChange}
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

                    {/* <input type="file" accept="image/*" capture></input> */}
                    
                    <button className='btn btn-primary w-100' id='upload' onClick={this.uploadWidget} style={{height: this.state.inputHeight}}><i className="fa fa-image"></i> Upload Photo</button>
                    <button className='btn btn-info w-100' type='submit' onClick={this.handleSubmit}
                        style={{
                            opacity: this.state.image==='' ? '30%' : '100%',
                            height: this.state.inputHeight
                        }}
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