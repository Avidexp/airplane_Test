import React from 'react';

class Services extends React.Component{


    render(){
        return(
            <div id="services" className="services">
            <div className="container">
                <h2>Our Services</h2>
                <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <i className="fa fa-desktop" aria-hidden="true"></i>
                        <h4>Service 1</h4>
                        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <h4>Service 2</h4>
                        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                </div>
                    <div className="col-lg-3 col-md-3">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <h4>Service 3</h4>
                        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                        <h4>Service 4</h4>
                        <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p> 
                    </div>                
                </div>
            </div>
        </div>
        )
    }
}

export default Services;