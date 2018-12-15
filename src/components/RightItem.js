import React, { Component } from 'react';
import '../RightItem.css';


class RightItem extends Component {
    render(){
    return (
        <div>
            <div className="RightTextBox">
                <img src={this.props.image} />
                <div className="Text">
                    <h4 style={{fontSize:20}}><a href={this.props.link}>{this.props.company}</a></h4>
                    <h5 style={{fontSize:15, color:"#2B7822"}}>{this.props.end}</h5>
                    <h5 style={{fontSize:15}}>{this.props.city}</h5>
                    <a style={{color:"#161616"}}>{this.props.description}</a>
                 </div>
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
  }


export default RightItem;