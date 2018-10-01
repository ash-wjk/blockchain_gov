import React, { Component } from 'react';
import '../styles/main.css';

export class VotingProjects extends Component{
    handleChange=(project)=>{
        let _project=project;
        this.props.vote(_project)
    }

    render(){
        let projectList=this.props.projects.map((project,i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this,project.name)}>{project.name}</td>
            <td>{project.rating}</td>
        </tr>)

        return(
            <div className = "page-center vote-project">
            <h3 className="homePageTitle"> Vote for a project</h3>
            <p className="homePageTitle"> Click on the project name to vote</p>
            <hr />
            <table >
                <tbody>
                    <tr>
                        <th>Project</th>
                        <th>Rating</th> 
                    </tr>
                    {projectList}
                </tbody>
            </table>
          </div>
        )
    } 
}

export default VotingProjects;