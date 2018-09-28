import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import good_governance from '../images/good_governance.png';


import '../styles/main.css';
import '../styles/largescreen.css';


class News extends Component {

render(){

  return(
    <div className="">
        <NavBar />

        <div className="row">{/* Banner */}
              <div className="col-md-12">
                  <div id="home_image" className="bg-image" >
                    <div className="page-center title-text" >
                      <h1 className="homePageTitle">NEWS</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        <div className="intro">
        <div className="row">{/* intro text */}
          <div className="col-md-6 col-md-offset-3 text-center how-it-works">
            <h1>TOP STORIES</h1>
            <hr/>

          </div>
        </div>{/* End of intro text */}
        </div>


        <div className="container news">{/* project grid */}

        <div className="news">{/* hexogon grid */}
        <div class="row">
          <div className="col-md-3">
          <div className="news-box">
            <img src={good_governance} />
            <p></p>
            <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
          </div>

          <div className="col-md-3">
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

export default News;
