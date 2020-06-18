import React, {Component} from 'react';

//database
import db from '../../database/database';

//components
import Input from '../input';

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
        }
        window.location.reload();
    }

    uploadWidget = (event) => {
        event.preventDefault()
        window.cloudinary.openUploadWidget({ 
            cloud_name: 'sarahm16', 
            upload_preset: 'gvezom1v', 
            sources: ['camera', 'local'],
            // showAdvancedOptions: true,
            cropping: true,
            multiple: false
        },
            (error, result) => {
                console.log(result[0].url);
                this.setState({
                    image: result[0].url
                })
            });
    }

    render() {
        return(
        <div aria-labelledby="headingOne">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        {/* <label for="name">Name</label> */}
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-6'>
                            <input type="text" className="form-control" id="phone" placeholder="Phone" onChange={this.onChange} value={this.state.phone}/>
                        </div>
                        <div className='form-group col-6'>
                            <input type="text" className="form-control" id="date" placeholder="Date" onChange={this.onChange} value={this.state.date}/>
                        </div>
                    </div>
                    <div className="form-group">
                        {/* <label for="festival">Festival you met at:</label> */}
                        <input type="text" className="form-control" id="festival" placeholder="Festival" onChange={this.onChange} value={this.state.festival}/>
                    </div>
                
                    <textarea className='notes form-control' id='notes' placeholder='Notes' onChange={this.onChange} value={this.state.notes}></textarea>
                    <br />
                    {/* <Input /> */}
                    <button className='btn btn-primary' onClick={this.uploadWidget}><i className="fa fa-image"></i> Upload Photo</button>
                    <button className='btn btn-info w-100' type='submit' onClick={this.handleSubmit}>Add Friend</button>
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