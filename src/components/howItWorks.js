import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import good_governance from '../images/good_governance.png';


import '../styles/main.css';
import '../styles/largescreen.css';


class HowItWorks extends Component {

render(){

  return(
    <div className="">
        <NavBar />

        <div className="row">{/* Banner */}
              <div className="col-md-12">
                  <div id="home_image" className="bg-image" >
                    <div className="page-center title-text" >
                      <h1 className="homePageTitle">HOW IT WORKS</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        <div className="intro">
        <div className="row">{/* intro text */}
          <div className="col-md-6 col-md-offset-3 text-center how-it-works">
            <h1>BLOCKCHAIN IN GOVERNMENT</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet, fierent detraxit qui ex, usu et noluisse percipit, qui pertinacia rationibus ea. Vix eu mutat dicant utinam, at quo novum integre, constituto deseruisse accommodare cu pri. Quem mollis postulant id vel, ex affert convenire vim, vix quodsi vivendo electram at. Cum commune luptatum at, vel recteque argumentum ut, no eam nostro torquatos democritum.</p>
            <img src={good_governance} />
          </div>
        </div>{/* End of intro text */}
        </div>


        <div className="container how-it-works">{/* project grid */}
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <h2>OUR GOAL</h2>
          </div>
        </div>

        <div className="how-it-works">{/* hexogon grid */}
        <div class="row">
          <div className="col-md-6">
            <ul>
              <li>fierent detraxit qui ex, usu et noluisse percipit, qui pertinacia rationibus ea.</li>
              <li>Lorem ipsum dolor sit amet, fierent detraxit qui ex Vix eu mutat dicant utinam</li>
              <li>at quo novum integre, constituto deseruisse accommodare cu pri. </li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul>
              <li>Vix eu mutat dicant utinam, at quo novum integre, </li>
              <li>usu et noluisse percipit, qui pertinacia rationibus ea.</li>
              <li>Quem mollis postulant id vel, ex affert convenire vim, vix quodsi vivendo electram at.</li>
            </ul>
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

export default HowItWorks;
