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


const Milestone = ({milestone, onCompletion}) => (
  <div class="row">
  <div className="col-8">
      <p>{milestone.name}</p>
  </div>

  <div className="col-4 ">
    <div className="checkbox-update">
        <form>
        <input type="checkbox" name={milestone.id} checked={milestone.completed} onChange={onCompletion}/>
        </form>
    </div>
  </div>
</div>
)

const UpdateProject = inject(stores => ({
  currentProject: stores.projects.currentProject,
  addExpenditure: stores.ledger.addExpenditure,
  addMilestone: stores.ledger.addMilestone
}))(observer(

  class UpdateProject extends Component {

    initialState = {
      amount : '',
      description : '',
      date : ''
    }

    state = this.initialState;

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

    onClearData = () => {
      this.setState(this.initialState);
    }

    onAddExpenditure = () => {
      const { addExpenditure } = this.props;
      addExpenditure(this.state);
    }

    onMilestoneComplation = milestone => {
      const { addMilestone } = this.props;
      milestone.completed = true;
      const data = {
        id : milestone.id,
        text: milestone.name
      }
      addMilestone(data);
    }
  
    render(){
      const { currentProject } = this.props;
      const { incompleteMilestones } = currentProject;
      
      return(
        <div className="col-md-12">
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
              <h1>{currentProject.name}</h1>
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
                        <input type="text" name="amount" onChange={this.handleInputChange}/>
                      </form>
                    </div>
                  </div>
  
                  <div className="row">
                    <div className="col-6">
                      <p>Description :</p>
                    </div>
  
                    <div className="col-6">
                      <form>
                        <textarea name="description" onChange={this.handleInputChange}/>
                      </form>
                    </div>
                  </div>
  
                  <div class="row">
                    <div className="col-6">
                      <p>Date :</p>
                    </div>
  
                    <div className="col-6">
                      <form>
                        <DayPickerInput name="date" selectedDay={this.state.date} onDayChange={this.handleDayChange}/>
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
                    <button class="button" onClick={this.onClearData}>CLEAR</button>
                    <button class="button" onClick={this.onAddExpenditure}>SAVE</button>
                </div>
  
              </div>{/* End of Expenditure*/}
  
              <div className="col-6">{/* Milestones*/}
                <div className="page-center-update add-project">
                    <div className="add-projec-title1">
                        <h1>Milestone Completion</h1>
                    </div>
                </div>
  
                <div className="page-center-update update-project">
                {incompleteMilestones.length > 0 
                ? incompleteMilestones.map(milestone => 
                  <Milestone milestone={milestone} onCompletion={() => this.onMilestoneComplation(milestone)}/>
                )
                : <h3> All Done! </h3>
                }
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

))

export default UpdateProject;
