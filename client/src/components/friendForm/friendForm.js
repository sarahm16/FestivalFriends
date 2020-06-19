import React, {Component} from 'react';

//database
import db from '../../database/database';

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
            isSubmitted: false,
            type: 'text'
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
                this.setState({
                    image: result[0].url
                })
            }
        });
    }

    onFocus = () => {
        this.setState({type: 'date'})
    }

    render() {
        return(
        <div aria-labelledby="headingOne">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-6'>
                            <input type="text" className="form-control" id="phone" placeholder="Phone" onChange={this.onChange} value={this.state.phone}/>
                        </div>
                        <div className='form-group col-6'>
                            <input type={this.state.type} onFocus={this.onFocus} className="form-control" id="date" placeholder="Date" onChange={this.onChange} value={this.state.date}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="festival" placeholder="Festival" onChange={this.onChange} value={this.state.festival}/>
                    </div>
                
                    <textarea className='notes form-control' id='notes' placeholder='Notes' onChange={this.onChange} value={this.state.notes}></textarea>
                    <br />
                    {/* <Input /> */}
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            {this.state.image !== '' &&<img src={this.state.image}  alt='thumbnail'
                            style={{width: '150px'}}
                            />}
                        </div>
                        <div className='col-4'></div>
                    </div>
                    <button className='btn btn-primary w-100' id='upload' onClick={this.uploadWidget}><i className="fa fa-image"></i> Upload Photo</button>
                    <button className='btn btn-info w-100' type='submit' onClick={this.handleSubmit}
                        style={{
                            opacity: this.state.image==='' ? '30%' : '100%'}}
                    >Add Friend</button>
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