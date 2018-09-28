import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import arrow1 from '../images/arrow1.svg';
import arrow2 from '../images/arrow2.svg';
import hexagon from '../images/hexagon.svg';

import '../styles/main.css';
import '../styles/largescreen.css';


const NUMBER_OF_ROWS = 5;

const ProjectTile = () => {
  return(
    <div class="outerclip">
      <div class="innerclip" onClick={() => {console.log('project')}}>
        <img src={hexagon}/>
        <p>PROJECT1</p>
      </div>
    </div>
  )
}

const ProjectTilesRow = ({numberOfTiles}) => {
  const tiles = [];
  for (let index = 0; index < numberOfTiles; index++) {
    tiles.push(<ProjectTile />);
  }
  return(
    <div class="row">
    {tiles}
    </div>
  )
}

const ProjectTiles = () => {
  const tiles = [];
  for (let index = 0; index < NUMBER_OF_ROWS; index++) {
    tiles.push(<ProjectTilesRow numberOfTiles={index % 2 === 0 ? 3 : 2} />)
  }
  console.log(tiles)
  return tiles;
}


class Home extends Component {

render(){

  return(
    <div className="home-page">
        <NavBar />

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
          <ProjectTiles />
        </div>{/* end of hexogon grid */}
        </div>{/* end of project grid */}

        <div>
          <Footer />
        </div>
    </div>
  )}

}

export default Home;
