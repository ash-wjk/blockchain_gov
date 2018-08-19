import React, { Component } from 'react';
import '../styles/main.css';

class Footer extends Component {

render(){

  return(
    <div className="footer">
    <div className="container">
    <div className="row">{/* contact details */}
        <div className="col-md-6">
          <h4>Contact Us</h4>
          <p>123 Main Street</p>
          <p>Rajagiriya</p>
          <p>Colombo</p>
          <p>Sri Lanka</p>
        </div>

        <div className="col-md-6">
          <p>Telephone: +9412345678</p>
          <p>Email: aaa@bbb.com</p>
        </div>
    </div>
    </div>

    <div className="row">{/* copyright */}
        <div className="col-md-12 copyright">
          <p>© Copyright 2018 My Work Limited. All Rights Reserved.</p>
        </div>
    </div>

    </div>

  )}
  // end of return and render
} // end of Component


export default Footer;
