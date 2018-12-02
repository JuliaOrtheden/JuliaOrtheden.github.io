import React, { Component } from 'react';
//import './App.css';

class Menu extends Component {
    render() {
    return (
        <div>
            <div className="link">
                <h4 style={linkStyle}><a href="http://www.websiteaddress.com/documents/filename.pdf">RESUME</a></h4>
            </div>
             <div className="logo">
                <h4 style={linkStyle}>JULIA ORTHEDEN</h4>
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

export default Menu;