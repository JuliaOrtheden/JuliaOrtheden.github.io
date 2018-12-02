import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Menu />
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
export default App;
