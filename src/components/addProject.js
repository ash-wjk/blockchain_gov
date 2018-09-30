import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import TodoList from "./TodoList";
import '../styles/main.css';
import '../styles/largescreen.css';
import 'react-day-picker/lib/style.css';


const AddProject = inject(stores => ({
  addProject: stores.ledger.addProject
}))(observer(
  class AddProject extends Component {

  initialState = {
    projectName : '',
    projectDescription : '',
    projectBudget: '',
    projectStartDate: '',
    projectEndDate: '',
    projectMilestones: [],
  }

  state = this.initialState;

  validateInputs = () => {
    const errorMsgs = [];
    if (!this.state.projectName){
      errorMsgs.push("Please enter project name");
    }
    if(!this.state.projectDescription){
      errorMsgs.push("Please enter project description");
    }
    if(!this.state.projectBudget){
      errorMsgs.push("Please enter project budget");
    }
   if(!this.state.projectStartDate){
      errorMsgs.push("Please enter project start date");
    }
    if(!this.state.projectEndDate){
      errorMsgs.push("Please enter project end date");
    }
    if(this.state.projectMilestones.length === 0){
      errorMsgs.push("Please enter project milestoes");
    }
    if(this.state.projectStartDate && this.state.projectEndDate){
      if(this.state.projectStartDate > this.state.projectEndDate){
        errorMsgs.push("Start date must be befor the end date");
      }
    }
    return errorMsgs;
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
    })
  }

  handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    const { name } = dayPickerInput.props;
    this.setState({
      [name]:selectedDay
    })
  }

  saveMilestonesList = list => {
    console.log(list)
    this.setState({projectMilestones:list});
  }

  onClearData = () => {
    this.setState(this.initialState);
  }

  onAddProject = () => {

    const errorMsgs = this.validateInputs();
    console.log('Error:', errorMsgs)
    if(errorMsgs.length > 0 ){ 
      window.alert(errorMsgs.join('\r\n'));   
      
    }

    const { addProject } = this.props;
    addProject(this.state);
  }

  render(){
    return(
      <div className="">
          <div className="row">{/* Banner */}
                <div className="col-md-12">
                    <div id="home_image" className="bg-image" >
                      <div className="page-center title-text" >
                        <h1 className="homePageTitle">ADD PROJECT</h1>
                      </div>
                    </div>
                </div>
          </div>{/* End of Banner */}

          {/* Forms */}

          <div className="page-center">

                <div className="add-projec-title1">
                  <h1>Project Details</h1>
                </div>

                <div className="add-project">

                <div class="row">{/* Project name */}
                  <div className="col-4">
                    <p>Project Name :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="projectName" value={this.state.projectName} onChange={this.handleInputChange}/>
                    </form>
                  </div>
                </div>{/* End of project name */}

                <div class="row">{/* End of Project category */}
                  <div className="col-4">
                    <p>Project Category :</p>
                  </div>

                  <div className="col-8">
                  <form>
                    <div>
                      <select className="dropdown-color">
                        <option value="">Select project category</option>
                        <option value="">Construction</option>
                        <option value="">Welfare</option>
                        <option value="">Agriculture</option>
                      </select>
                    </div>
                  </form>
                  </div>

                </div>{/* End of project category */}

                <div class="row">{/* Project Description */}
                  <div className="col-4">
                    <p>Project Description :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <textarea name="projectDescription" value={this.state.projectDescription} onChange={this.handleInputChange}/>
                    </form>
                  </div>
                </div>{/* End of Project Description */}

                <div class="row">{/* Project Budget */}
                  <div className="col-4">
                    <p>Project Budget :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="number" name="projectBudget" value={this.state.projectBudget} onChange={this.handleInputChange}/>
                    </form>
                  </div>
                </div>{/* End of Project Budget */}

                <div class="row"> {/* Start Date*/}
                  <div className="col-4">
                    <p>Start Date :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <DayPickerInput name="projectStartDate" selectedDay={this.state.projectStartDate} onDayChange={this.handleDayChange}/>
                    </form>
                  </div>
                </div>{/* End of Start Date*/}

                <div class="row">{/* Estimated End Date */}
                  <div className="col-4">
                    <p>Estimated End Date :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <DayPickerInput name="projectEndDate" selectedDay={this.state.projectEndDate} onDayChange={this.handleDayChange}/>
                    </form>
                  </div>
                </div>{/* End of Estimated End Date*/}

                <hr/>
                {/* Contractor Details */}
                <div className="add-projec-title">
                  <h1>Contractor Details </h1>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Name :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>

                <div class="row">
                  <div className="col-4">
                    <p>Company :</p>
                  </div>

                  <div className="col-8">
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                </div>
                {/* End of Contractor Details */}

                <hr/>
                {/* Milestones*/}

                  <div class="row">
                    <div className="col-4">
                      <div className="add-projec-title">
                        <h1>Milestones </h1>
                      </div>
                    </div>

                    <div className="col-8 milestones">
                    <TodoList onSaveList={this.saveMilestonesList}/>
                  </div>

                </div>
                {/* End of Milestones*/}
                <hr/>
                

                </div>

                <div className="project-button" >
                    <button class="button" onClick={this.onClearData}>CLEAR</button>
                    <button class="button" onClick={this.onAddProject}>ADD</button>
                </div>
              </div>





              <div>
                <Footer />
              </div>
    </div>
    )}

  }
))

export default AddProject;
