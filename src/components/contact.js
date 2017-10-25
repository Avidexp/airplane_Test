import React from 'react';

class Contact extends React.Component{

    render(){
        return(
            <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <h2>Contact</h2>
                    <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Full Name"/>
                        </div>
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Email Address"/>
                        </div>
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Phone Number"/>
                        </div>
        
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group">
                            <textarea name="" id="" cols="80" rows="6" className="form-control"></textarea>
                        </div>
                        <button className="btn btn-md">Submit your Message</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact;