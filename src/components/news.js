import React, { Component } from 'react';
import NavBar from './navbar'
import Footer from './footer'
import { row, col, table } from 'bootstrap';
import news1 from '../images/news1.jpg';
import news_default from '../images/news_default.png';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpeg';
import news5 from '../images/news5.jpg';
import news6 from '../images/news6.jpg';
import news7 from '../images/news7.jpg';
import news8 from '../images/news8.jpg';
import good_governance from '../images/good_governance.png';


import '../styles/main.css';
import '../styles/largescreen.css';


class News extends Component {

render(){

  return(
    <div className="">

        <div className="row">{/* Banner */}
              <div className="col-md-12">
                  <div id="home_image" className="bg-image" >
                    <div className="container title-text" >
                      <h1 className="homePageTitle">NEWS</h1>
                    </div>
                  </div>
              </div>
        </div>{/* End of Banner */}

        <div className="intro">
        <div className="row">{/* intro text */}
          <div className="col-md-6 col-md-offset-3 text-center how-it-works">
            <h1><strong>TOP STORIES</strong></h1>
            <hr/>
          </div>
        </div>{/* End of intro text */}
        </div>


        <div className="container news">{/* project grid row1 */}

          <div className="news">{/* news grid */}
            <div class="row">
              <div className="col-md-3">
                <div className="news-box">
                  <img src={news1} />
                  <p className="news-des"><strong>India’s Blockchain Ecosystem Suffers as Antagonistic Government Policy Brings Exodus</strong></p>
                  <p className="news-des">The fallout from India’s regulatory position on cryptocurrencies is leading to an exit of talent, businesses and investment from the country’s blockchain space on a scale paralleled only by a prior wave of tech industry flight during the internet boom of the late 90s and early noughties.</p>
                  <a href="https://www.ccn.com/indias-blockchain-ecosystem-suffers-as-antagonistic-government-policy-brings-exodus/">See more</a>
                  <p>By David Hundeyin</p>
                  <p>22nd September 2018</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="news-box">
                  <img src={news_default} />
                  <p className="news-des"><strong>Governments Quickly Changing Their Tune On Blockchain</strong></p>
                  <p className="news-des">Go back five years or so and you’d be hard-pressed to find any government endorsing blockchain1 technology, and many were (and still look to be) openly hostile to cryptocurrencies. That posture is now shifting—quickly.</p>
                  <a href="https://seekingalpha.com/article/4204143-governments-quickly-changing-tune-blockchain">See more</a>
                  <p>By REX Shares</p>
                  <p>5th September 2018</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="news-box">
                  <img src={news3} />
                  <p className="news-des"><strong>Government to Actively Back Domestic Blockchain Companies</strong></p>
                  <p className="news-des">On September 20, 2018, Min held a meeting with various blockchain-related startups at Blocko’s office. Blocko is a well known and prominent South Korea-based enterprise blockchain platform provider. The office was located in Bundang, Gyeonggi Province. The South Korean Government was keen to communicate with blockchain-related companies as they were one of the primary 10 ICT sectors related to the Fourth Industrial Revolution.</p>
                  <a href="https://btcmanager.com/south-korean-government-pledges-to-support-domestic-blockchain-projects/">See more</a>
                  <p>By  Eric Czuleger</p>
                  <p>22nd September 2018</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="news-box">
                  <img src={news4} />
                  <p className="news-des"><strong>Beyond bitcoin: How the world is experimenting with the blockchain</strong></p>
                  <p className="news-des">Blockchain technology is beginning to move past cryptocurrencies into companies and now governments. Countries around the world are trialing the emerging technology in areas from recording votes in elections to storing the records of citizens.</p>
                  <a href="https://www.cnbc.com/2018/08/29/bitcoin-world-is-experimenting-with-blockchain.html">See more</a>
                  <p>By Arjun Kharpal</p>
                  <p>29th August 2018</p>
                </div>
              </div>

            </div>
          </div>{/* end of news grid */}

        </div>{/* end of project grid row1 */}

        <div className="container news">{/* project grid row2 */}

          <div className="news">{/* news grid */}
            <div class="row">
              <div className="col-md-3">
                <div className="news-box">
                  <img src={news5} />
                  <p className="news-des"><strong>Making Sense Of Chinas Grand Blockchain Strategy</strong></p>
                  <p className="news-des">For a couple of years now it has appeared as if the Chinese government is seeking to “have its cake and eat it too” when it comes to crypto assets and blockchain technology. The simple phrase “blockchain not Bitcoin” has become the country’s defining strategy when it comes to the space, and the difference in approaches that the government has taken regarding closed v. open ledgers and assets is a study in contrast.</p>
                  <a href="https://www.forbes.com/sites/stevenehrlich/2018/09/17/making-sense-of-chinas-grand-blockchain-strategy/">See more</a>
                  <p>By Steven Ehrlich</p>
                  <p>17th September 2018</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="news-box">
                  <img src={news6} />
                  <p className="news-des"><strong>Indian State Government Will Issue Birth Certificates on a Blockchain</strong></p>
                  <p className="news-des">Two local governments in West Bengal, India are integrating the application for birth certificates on a blockchain system developed by Lynked.world, a blockchain app company based in the Netherlands. Bankura Municipal Corporation and Durgapur Municipal Corporation will be using blockchain tech to handle administrative operations such as processing requests and verifying legal identities to make processes like applications for legal documents such as birth certificates more streamlined.</p>
                  <a href="https://www.ccn.com/indian-state-government-will-issue-birth-certificates-on-a-blockchain/">See more</a>
                  <p>By Conor Maloney</p>
                  <p>28th August 2018</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="news-box">
                  <img src={news7} />
                  <p className="news-des"><strong>Every week more Governments are announcing Blockchain adoption</strong></p>
                  <p className="news-des">Cryptocurrency and Blockchain technology has been in the recent past the hot topic in digital technologies. Perhaps for its capacity to decentralise services or for its market.In that connection, many people are waiting for governments to start using blockchain to invest in it. </p>
                  <a href="https://www.globalbankingandfinance.com/every-week-more-governments-are-announcing-blockchain-adoption/">See more</a>
                  <p>1st September 2018</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="news-box">
                  <img src={news8} />
                  <p className="news-des"><strong>Bahrain: Government Official Hails Blockchain as ‘True Mark of Progress’</strong></p>
                  <p className="news-des">The government of Bahrain has stressed the importance of blockchain technology for the country’s economy while urging cybersecurity vigilance, local media outlet News of Bahrain reported Tuesday, September 4. As part of an address to audiences at the country’s SmartSec Cyber Security and Blockchain.Conference 2018, Abdulhussain Mirza, Bahrain’s minister of electricity and water affairs</p>
                  <a href="https://cointelegraph.com/news/bahrain-government-official-hails-blockchain-as-true-mark-of-progress">See more</a>
                  <p>By William Suberg</p>
                  <p>5th September 2018</p>
                </div>
              </div>

            </div>
          </div>{/* end of news grid */}

        </div>{/* end of project grid row2*/}


        <div>
          <Footer />
        </div>

    </div>

  )}

}

export default News;
