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
    <div className="col-md-12">
      <div>
        <NavBar />
      </div>

        <div className="row">{/* Banner */}
              <div className="col-md-12">
                  <div id="home_image" className="bg-image" >
                    <div className="page-center-update title-text" >
                      <h1 className="homePageTitle">UPDATE PROJECT</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        {/* Forms */}

        <div className="">

        <div className="page-center-update add-projec-title1">
          <h1>Project Name</h1>
        </div>

        <div className="line-center-update">
            <hr/>
        </div>

        <div className="row">
          <div className="col-6">{/* Expenditure*/}
            <div className="page-center-update update-project">
              <div className="add-projec-title1">
                <h1>Expenditure </h1>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>Amount :</p>
                </div>

                <div className="col-6">
                  <form>
                    <input type="text" name="name" />
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>Description :</p>
                </div>

                <div className="col-6">
                  <form>
                    <textarea />
                  </form>
                </div>
              </div>

              <div class="row">
                <div className="col-6">
                  <p>Date :</p>
                </div>

                <div className="col-6">
                  <form>
                    <DayPickerInput />
                  </form>
                </div>
              </div>

              <div class="row">
                <div className="col-6">
                  <p>Evidence (Eg: Receipt) :</p>
                </div>

                <div className="col-6">
                  <form>
                    <input type="file" />
                  </form>
                </div>
              </div>
            </div>

            <div className="project-button" >
                <button class="button" onClick={this.buttonClick}>CLEAR</button>
                <button class="button">SAVE</button>
            </div>

          </div>{/* End of Expenditure*/}

          <div className="col-6">{/* Milestones*/}
            <div className="page-center-update add-project">
                <div className="add-projec-title1">
                    <h1>Milestone Completion</h1>
                </div>
            </div>

            <div className="page-center-update update-project">

                <div class="row">
                    <div className="col-8">
                        <p>Phasellus quis consectetur</p>
                    </div>

                    <div className="col-4 ">
                      <div className="checkbox-update">
                          <form>
                          <input type="checkbox" name="" value=""/>
                          </form>
                      </div>
                    </div>
                </div>



          </div>  {/* End of Milestones*/}


          </div>
        </div>

      <div className="line-center-update">
          <hr/>
      </div>

      <div>
        <Footer />
      </div>

      </div>
</div>
  )}

}

export default UpdateProject;
