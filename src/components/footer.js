import React from 'react';

class Footer extends React.Component{


    render(){
        return(
            <div class="footer" class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <h4>Contact Us</h4>
                        <p><i class="fa fa-home" aria-hidden="true"></i> 8444 N. 90th St. #110 Scottsdale, AZ 85258</p>
                        <p><i class="fa fa-envelope" aria-hidden="true"></i> info@codercamps.com</p>
                        <p><i class="fa fa-phone" aria-hidden="true"></i>  +1 855 755 2267</p>
                        <p><i class="fa fa-globe" aria-hidden="true"></i>  www.codercamps.com</p>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <h4>About</h4>
                        <p><i class="fa fa-square-o" aria-hidden="true"></i> About Us</p>
                        <p><i class="fa fa-square-o" aria-hidden="true"></i> Privacy</p>
                        <p><i class="fa fa-square-o" aria-hidden="true"></i> Term & Conditions</p>
                    </div>
                    <div class="col-lg-4 col-md-4">
                    <h4>Stay In Touch</h4>
                    <i class="social fa fa-facebook" aria-hidden="true"></i>
                    <i class="social fa fa-twitter" aria-hidden="true"></i>
                    <i class="social fa fa-instagram" aria-hidden="true"></i>
                    <i class="social fa fa-linkedin" aria-hidden="true"></i>
                    <i class="social fa fa-youtube" aria-hidden="true"></i>
                    <i class="social fa fa-github" aria-hidden="true"></i><br/>
                    <input type="email" placeholder="Subsribe For Updates"><button class="btn btn-md btn-primary">Subscribe</button></input>
                    </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Footer;