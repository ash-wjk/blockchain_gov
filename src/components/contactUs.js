import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import Map from './map'
import { row, col, table } from 'bootstrap';
import news1 from '../images/news1.jpg';


import location from '../images/location.png';
import phone from '../images/phone.png';
import email from '../images/email.png';
import news6 from '../images/news6.jpg';
import news7 from '../images/news7.jpg';
import news8 from '../images/news8.jpg';
import good_governance from '../images/good_governance.png';


import '../styles/main.css';
import '../styles/largescreen.css';


class ContactUs extends Component {

render(){

  return(
    <div className="">

        <div className="row">{/* Banner */}
              <div className="col-md-12">
                  <div id="home_image" className="bg-image" >
                    <div className="container title-text" >
                      <h1 className="homePageTitle">CONTACT US</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        <div className="intro">
        <div className="row">{/* intro text */}
          <div className="col-md-6 col-md-offset-3 text-center how-it-works">
            <h1><strong>WE ARE HERE TO HELP</strong></h1>
            <hr/>
            <p>We would like to answer any questions you have and provide</p>
            <p>any information you need.</p>
          </div>
        </div>{/* End of intro text */}
        </div>


        <div className="container">{/* project grid row1 */}

          <div className="contact-us">{/* news grid */}
            <div class="row">
              <div className="col-md-6">
                <div className="">
                <form>
                  <div >
                  <input type="text" name="name" />
                  </div>
                  <div>
                  <input type="text" name="name" />
                  </div>
                  <div>
                  <textarea />
                  </div>

                  <div className="contact-button" >
                      <button class="button" onClick={this.buttonClick}>SEND</button>
                  </div>

                </form>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-us">

                <img src={location} />
                <span>123 Main Street, Rajagiriya, Colombo, Sri Lanka</span>
                <br /><br />
                <img src={phone} />
                <span>9412345678</span>
                <br /><br />
                <img src={email} />
                <span>aaa@bbb.com</span>

                </div>
                <hr/>
              </div>
            </div>
          </div>{/* end of news grid */}

        </div>{/* end of project grid row1 */}

        <div className="">{/* project grid row2 */}

          <div className="">{/* news grid */}
            <div class="row">
              <Map />
            </div>
          </div>{/* end of news grid */}

        </div>{/* end of project grid row2*/}


        <div>
          <Footer />
        </div>

    </div>

  )}

}

export default ContactUs;
