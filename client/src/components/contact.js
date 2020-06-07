import React from 'react';

function Contact(props) {
    return(
        // <div className='row'>
        //     <div className='col-6'>{props.name}</div>
        //     <div className='col-6'><button>Delete</button></div>
        // </div>
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <div className='row'>
                    <div className="col-6 text-left">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {props.name}
                        </button>
                    </div>
                    <div className='col-6 text-right'>
                        <button>
                            Delete
                            {/* <i className="fas fa-trash-alt"></i> */}
                        </button>
                    </div>
                    </div>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;