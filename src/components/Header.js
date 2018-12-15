import React, { Component } from 'react';
import '../Header.css';

class Header extends Component {
    render() {
    return (
        <div className="Header">
            <div className="link">
                <h4 style={linkStyle}><a href="http://ortheden.com/Resume_JuliaOrtheden.pdf">RESUME</a></h4>
            </div>
             <div className="logo">
                <h4 style={linkStyle}>JULIA ORTHEDEN</h4>
            </div>
            <div>
          <h1 style={headerStyle}>Hey there, 
            I'm Julia</h1>
          <h2 style={textStyle}> A Swedish software engineering student. </h2>
        </div>
        </div>
        );

    }
}

const headerStyle = {
    color: '#FFF',
    fontSize: '60px',
    fontWeight: 'normal',
    //fontFamily: 'Helvetica'
  }
  const textStyle = {
    color: '#FFF',
    fontSize: '20px',
    fontWeight: 'normal',
    //fontStyle: 'italic',
  }

const linkStyle = {
    color: '#FFF',
    fontSize: '20px',
    fontWeight: 'normal',
    margin: "0",
    top: '0', 
    //fontStyle: 'italic',
  }

export default Header;