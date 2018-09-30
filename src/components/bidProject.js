import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import TodoList from "./TodoList";
import '../styles/main.css';
import '../styles/largescreen.css';
import 'react-day-picker/lib/style.css';

class BidProject extends Component {

buttonClick = () => {
  console.log('button clicked')
}


render(){

  return(
    <div className="">
        <NavBar />

        <div className="row">{/* Banner */}
              <div className="col-md-12">
                  <div id="home_image" className="bg-image" >
                    <div className="page-center title-text" >
                      <h1 className="homePageTitle">PLACE A BID</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        {/* Forms */}

        <div className="page-center">

              <div className="add-projec-title1">
                <h1>Place Your Bid</h1>
              </div>

            <div className="add-project">

              <div class="row">{/* End of project name  */}
                <div className="col-4">
                  <p>Project Name :</p>
                </div>

                <div className="col-8">
                <form>
                  <div>
                    <select className="dropdown-color">
                      <option value="">Select project name</option>
                      <option value="">aaa</option>
                      <option value="">bbb</option>
                      <option value="">ccc</option>
                    </select>
                  </div>
                </form>
                </div>
              </div>{/* End of project name */}

              <div class="row">{/* Company name */}
                <div className="col-4">
                  <p>Company Name :</p>
                </div>

                <div className="col-8">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>{/* End of project name */}

              <div class="row">{/* Contact name */}
                <div className="col-4">
                  <p>Contact Name :</p>
                </div>

                <div className="col-8">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>{/* End of Contact name */}

              <div class="row">{/* Contact email */}
                <div className="col-4">
                  <p>Contact Email :</p>
                </div>

                <div className="col-8">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>{/* End of Contact email*/}

              <div class="row">{/* Project Bid */}
                <div className="col-4">
                  <p>Your Budget :</p>
                </div>

                <div className="col-8">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>{/* End of Project Bid*/}

              <div class="row">
                <div className="col-4">
                  <p>Proposal :</p>
                </div>

                <div className="col-8">
                  <form>
                    <input type="file" />
                  </form>
                </div>
              </div>


              <hr/>
              {/* Contractor Details */}

              <div className="project-button" >
                  <button class="button" onClick={this.buttonClick}>CLEAR</button>
                  <button class="button">SUBMIT</button>
              </div>

           </div>
        </div>

            <div>
              <Footer />
            </div>
   </div>
  )}

}

export default BidProject;
