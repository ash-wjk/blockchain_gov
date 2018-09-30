import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom'
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import arrow1 from '../images/arrow1.svg';
import arrow2 from '../images/arrow2.svg';
import hexagon from '../images/hexagon.svg';

import '../styles/main.css';
import '../styles/largescreen.css';


const NUMBER_OF_MIN_ROWS = 4;

const ProjectTile = ({project,setCurrentProject}) => {
  return(
    <Route render={({history}) => (
      <div class="outerclip">
        <div class="innerclip" onClick={() => {
            if(project){
              setCurrentProject(project)
              history.push('/overviewAndExpenses')
            }else{
              history.push('/addProject')
            }
          }}>
          <img src={hexagon}/>
          <p>{project ? project.name : 'Add Project'}</p>
        </div>
      </div>
    )} />
  )
}

const ProjectTilesRow = ({numberOfTiles, projects, setCurrentProject}) => {
  const tiles = [];
  for (let index = 0; index < numberOfTiles; index++) {
    tiles.push(<ProjectTile project={projects[index]} setCurrentProject={setCurrentProject}/>);
  }
  return(
    <div class="row">
    {tiles}
    </div>
  )
}

const ProjectTiles = ({projectsList, setCurrentProject}) => {
  const tiles = [];
  const numberOfProjects = projectsList.length;
  const numberOfProjectTiles = numberOfRows => {
    let numberOfTiles = 0
    for (let index = 0; index < numberOfRows; index++) {
      numberOfTiles += (index % 2 === 0 ? 3 : 2);
    }
    return numberOfTiles;
  }
  const numberOfRows = numberOfProjects < numberOfProjectTiles(NUMBER_OF_MIN_ROWS) ? NUMBER_OF_MIN_ROWS : 5 
  let startIndex = 0;
  let endIndex = 0;
  for (let index = 0; index < numberOfRows; index++) {
    if(index % 2 === 0){
      endIndex += 3
      const projects = projectsList.slice(startIndex, endIndex);
      tiles.push(<ProjectTilesRow numberOfTiles={3} projects={projects} setCurrentProject={setCurrentProject}/>)
      startIndex += 3;
    }else{
      endIndex += 2
      const projects = projectsList.slice(startIndex, endIndex);
      tiles.push(<ProjectTilesRow numberOfTiles={2} projects={projects} setCurrentProject={setCurrentProject}/>)
      startIndex += 2;
    }
  }
  return tiles;
}

const Home = inject(stores => ({
  getProjects:stores.ledger.getProjects,
  projectsList:stores.projects.projectsList,
  setCurrentProject: stores.projects.setCurrentProject
}))(observer(

  class Home extends Component {

    componentDidMount(){
      this.props.getProjects();
    }
  
    render(){

      const { projectsList, setCurrentProject } = this.props;
  
      return(
        <div className="home-page">
            <div className="row">{/* Banner */}
                  <div className="col-md-12">
                      <div id="home_image" className="bg-image" >
                        <div className="title-text" >
                          <h1 className="homePageTitle">GOVERNMENTS</h1>
                          <h1 className="homePageTitle"> AND BLOCKCHAIN TECHNOLOGY</h1>
                        </div>
                      </div>
                  </div>
            </div>{/* End of Banner */}
  
            <div className="intro">
            <div className="row">{/* intro text */}
              <div className="col-md-6 col-md-offset-3 text-center intro-text">
                <h2>BLOCKCHAIN FOR TRANCEPERANCY</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet, fierent detraxit qui ex, usu et noluisse percipit, qui pertinacia rationibus ea. Vix eu mutat dicant utinam, at quo novum integre, constituto deseruisse accommodare cu pri. Quem mollis postulant id vel, ex affert convenire vim, vix quodsi vivendo electram at. Cum commune luptatum at, vel recteque argumentum ut, no eam nostro torquatos democritum.</p>
                <img src={arrow1} />
                <button class="button">LEARN MORE</button>
                <img src={arrow2} />
              </div>
            </div>{/* End of intro text */}
            </div>
  
  
            <div className="container project-grid">{/* project grid */}
            <hr/>
            <div className="row">
              <div className="col-md-12">
                <h1>PROJECTS</h1>
              </div>
            </div>
            <div className="hex-grid">{/* hexogon grid */}
              <ProjectTiles projectsList={projectsList} setCurrentProject={setCurrentProject}/>
            </div>{/* end of hexogon grid */}
            </div>{/* end of project grid */}
  
            <div>
              <Footer />
            </div>
        </div>
    )}
  
  }

))

export default Home;
