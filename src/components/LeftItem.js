import React, { Component } from 'react';
import '../LeftItem.css';


class LeftItem extends Component {
    render(){
    return (
        <div>
            <div className="TextBox">
                <img src={this.props.image} />
                <div className="Text">
                    <h4 style={{fontSize:20}}><a href={this.props.link}>{this.props.company}</a></h4>
                    <h5 style={{fontSize:15, marginTop:0, color:"#2B7822"}}>{this.props.end}</h5>
                    <h5 style={{fontSize:15, marginTop:0}}>{this.props.city}</h5>
                    <a style={{color:"#606060"}}>{this.props.description}</a>
                 </div>
            </div>  
        </div>
        );

    }
}


export default LeftItem;