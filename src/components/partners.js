import React from 'react';

class Partners extends React.Component{

    render(){
        return(
            <div id="partners" className="partners">
    <div className="container">
        <div className="row">
            <h2>Our Partners</h2>
            <p>Lorem Ipsum is simply dummy rext of the printing and typesetting dummy text</p>
            <div className="col-lg-3 col-md-3">
            <li><img src="images/clients/client1.png" alt=""/></li>
            </div>
            <div className="col-lg-3 col-md-3">
            <li><img src="images/clients/client2.png" alt=""/></li>
            </div>
            <div className="col-lg-3 col-md-3">
            <li><img src="images/clients/client3.png" alt=""/></li>
            </div>
            <div className="col-lg-3 col-md-3">
            <li><img src="images/clients/client4.png" alt=""/></li>
            </div>       
        </div>
    </div>
</div>
        )
    }
}

export default Partners;