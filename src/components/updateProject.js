import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import TodoList from "./TodoList";
import '../styles/main.css';
import '../styles/largescreen.css';
import 'react-day-picker/lib/style.css';

class UpdateProject extends Component {

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
                      <h1 className="homePageTitle">UPDATE PROJECT</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        {/* Forms */}

        <div className="">

              <div className="page-center add-projec-title1">
                <h1>Project Details</h1>
              </div>

              <div className="page-center add-project">

              <div class="row">{/* Project name */}
                <div className="col-4">
                  <p>Project Name :</p>
                </div>

                <div className="col-8">
                  <p>Project Name </p>
                </div>
              </div>{/* End of project name */}

              <div class="row">{/* End of Project category */}
                <div className="col-4">
                  <p>Project Category :</p>
                </div>

                <div className="col-8">
                  <p>Project Category</p>
                </div>

              </div>{/* End of project category */}

              <div class="row">{/* Project Description */}
                <div className="col-4">
                  <p>Project Description :</p>
                </div>

                <div className="col-8">
                  <p>Project Description :</p>
                </div>
              </div>{/* End of Project Description */}

              <div class="row">{/* Project Budget */}
                <div className="col-4">
                  <p>Project Budget :</p>
                </div>

                <div className="col-8">
                  <p>Project Budget</p>
                </div>
              </div>{/* End of Project Budget */}

              <div class="row"> {/* Start Date*/}
                <div className="col-4">
                  <p>Start Date :</p>
                </div>

                <div className="col-8">
                  <p>Start Date</p>
                </div>
              </div>{/* End of Start Date*/}

              <div class="row">{/* Estimated End Date */}
                <div className="col-4">
                  <p>Estimated End Date :</p>
                </div>

                <div className="col-8">
                  <p>Estimated End Date </p>
                </div>
              </div>{/* End of Estimated End Date*/}

            </div>

            <div className="line-center">
              <hr/>
            </div>

              <div className="page-center add-project">
              {/* Contractor Details */}
              <div className="add-projec-title">
                <h1>Contractor Details </h1>
              </div>

              <div class="row">
                <div className="col-4">
                  <p>Name :</p>
                </div>

                <div className="col-8">
                  <p>Name</p>
                </div>
              </div>

              <div class="row">
                <div className="col-4">
                  <p>Company :</p>
                </div>

                <div className="col-8">
                  <p>Company</p>
                </div>
              </div>
              </div>
              {/* End of Contractor Details */}

              <div className="line-center">
                <hr/>
              </div>
              {/* Milestones*/}

              <div className="page-center add-project">{/* Expenditure*/}
                <div className="add-projec-title">
                  <h1>Milestone Completion</h1>
                </div>
              </div>

              <div className="page-center add-project">

                  <div class="row">
                    <div className="col-4">
                      <p>Phasellus quis consectetur</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Vestibulum aliquam</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Lorem ipsum dolor</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Accusata honestatis et</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Has te molestiae</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>Sit te animal conceptam</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-4">
                      <p>In detraxit urbanitasm</p>
                    </div>

                    <div className="col-8">
                      <form>
                        <input type="checkbox" name="" value=""/>
                      </form>
                    </div>
                  </div>

              {/* End of Milestones*/}
              </div>

              <div className="line-center">
                <hr/>
              </div>

              <div className="page-center add-project">{/* Expenditure*/}
                <div className="add-projec-title">
                  <h1>Expenditure </h1>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Reason :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Amount :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Date :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <DayPickerInput />
                    </form>
                  </div>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Evidence (Eg: Receipt) :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="file" />
                    </form>
                  </div>
                </div>

              </div>{/* End of Expenditure*/}

              <div className="line-center">
                <hr/>
              </div>

              <div className="page-center add-project">{/* project progress*/}
              <div className="add-projec-title">
                <h1>Progress</h1>
              </div>

              <div class="row">
                <div className="col-4">
                  <p>Month :</p>
                </div>

                <div className="col-8">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>

              <div class="row">
                <div className="col-4">
                  <p>Progress :</p>
                </div>

                <div className="col-8 checkbox">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>

              </div>{/* End of project progress*/}


              <div className="line-center">
                <hr/>
              </div>

              <div className="page-center add-project">
              <div>{/* project completed*/}
              <div className="add-projec-title">
                <h2>Project completion  </h2>
              </div>

              <div class="row">
                <div className="col-4">
                  <p>Is this project completed? :</p>
                </div>

                <div className="col-8 checkbox">
                  <form>
                  <input name="" type="checkbox" />
                  </form>
                </div>
              </div>
              </div>{/* End of project completed*/}
              </div>

              <div className="line-center">
                <hr/>
              </div>





              <div className="page-center project-button" >
                  <button class="button" onClick={this.buttonClick}>CLEAR</button>
                  <button class="button">SAVE</button>
              </div>
            </div>

            <div>
              <Footer />
            </div>
   </div>
  )}

}

export default UpdateProject;
