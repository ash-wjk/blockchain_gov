import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import arrow1 from '../images/arrow1.svg';
import arrow2 from '../images/arrow2.svg';
import hexagon from '../images/hexagon.svg';

import '../styles/main.css';
import '../styles/largescreen.css';


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
        <div class="row">
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT1</p>
              </div>
            </div>
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT2</p>
              </div>
            </div>
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT3</p>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="outerclip">
                <div class="innerclip">
                  <img src={hexagon} />
                  <p>PROJECT4</p>
                </div>
            </div>

            <div class="outerclip">
                <div class="innerclip">
                  <img src={hexagon} />
                  <p>PROJECT5</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT6</p>
              </div>
            </div>
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT7</p>
              </div>
            </div>
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT8</p>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>PROJECT9</p>
              </div>
            </div>
            <div class="outerclip">
              <div class="innerclip">
                <img src={hexagon} />
                <p>ADD PROJECT</p>
              </div>
            </div>
        </div>
        </div>{/* end of hexogon grid */}

        </div>{/* end of project grid */}

        <div>
          <Footer />
        </div>
    </div>

  )}

}

export default Home;
