import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Chalmers from './chalmers.png';
import LeftItem from './components/LeftItem';
import Ericsson from './Ericsson.png';
import csr from './csr.jpg';

const actualLink = "https://www.chalmers.se/en/Pages/default.aspx";
const graduation ="M.Sc Software Engineering, expected B.Sc 2019";
const text = "During my three years in Chalmers I have really pushed my limits and challenged myself constantly. I have learned incredibly much and been surrounded by inspiring people. I prepare for my bachelor thesis which will be in the area of dynamic voice agents. ";

const ericssonLink = "https://www.ericsson.com/en";
const end = "Summer Internship R&D, 2018";
const eText = "Half of the internship focused on learning and implementing new programs such as Prometheus to handle metrics and Elastic Stack to handle logs. The other half consisted of developing an application to handle internal process ratings. From database structure to user interaction. An application which I will continue to develop besides my studies this autumn.During the internship I greatly improved my overall understanding of the process of building an application from scratch to deployment and to absorb and implement new techniques quickly."

const csrLink = "https://chalmersrekrytering.se/?gclid=Cj0KCQiA3b3gBRDAARIsAL6D-N-cXgKWqYsEleLjdxuQplCMZmVLuM9gqOuNx9oo_JVHkJJhVin124caArcuEALw_wcB";
const sText = "Developed and maintained the website and the internal IT-system within an already existing code base in a team of two. I challenged myself constantly since web development, servers and databases were all new subjects to me.";
const pText = "I managed my own recruitment projects from first contact with companies to the interviews with potential candidates. I greatly improved my communication skills and learned a lot about different business structures.";
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content">
        <LeftItem image={Chalmers} company="Chalmers University of Technology" link={actualLink} end={graduation} city="Gothenburg" description={text} />
        <LeftItem image={Ericsson} company="Ericsson" link={ericssonLink} end={end} city="Gothenburg" description={eText} />
        <LeftItem image={csr} company="Chalmers Studentkår Rekrytering" link={csrLink} end="Software developer, part-time 2017-2018" city="Gothenburg" description={sText} />
        <LeftItem image={csr} company="Chalmers Studentkår Rekrytering" link={csrLink} end="Project manager, part-time 2016-2017" city="Gothenburg" description={pText} />
      </div>
      </div>
    );
  }
}


const linkStyle = {
  color: '#FFF',
  fontSize: '20px',
  fontWeight: 'normal',
  margin: "0",
  top: '0', 
  //fontStyle: 'italic',
}
export default App;
