import React, { Component } from 'react';
import { votingContract } from '../EthereumSetup';
import { VotingProjects } from './votingProjects';
import NavBar from './navbar'
import Footer from './footer'
import '../styles/main.css';
import '../styles/largescreen.css'


class VoteProject extends Component {

  constructor(props){
    super(props)
    this.state={
      projects : [{name:'Rebuild the Town Hall',rating:0},{name:'Community Centre Upgrade',rating:0},{name:'Children Playground',rating:0}]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

  handleVoting(project){
    if(votingContract){
      votingContract.voteForProject(project)
      let votes=votingContract.totalVotesFor(project).toNumber()
      this.setState({projects:this.state.projects.map(
        (el)=>el.name===project? Object.assign({},el,{rating:votes}):el
      
      )});
    }
  }

  render(){

    return(
      <div className="">
          <NavBar />

          <div className="row">{/* Banner */}
                <div className="col-md-12">
                    <div id="home_image" className="bg-image" >
                      <div className="page-center title-text" >
                        <h1 className="homePageTitle">VOTE FOR NEXT PROJECT</h1>
                      </div>
                    </div>
                </div>
          </div>{/* End of Banner */}
          <div className="projects-table">
          <VotingProjects projects={this.state.projects} vote={this.handleVoting} notSupported={votingContract === undefined}/>
          </div>
          <div>
            <Footer />
          </div>
    </div>
    )}

  }

export default VoteProject;
