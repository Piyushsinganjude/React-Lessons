import React, { Component } from 'react';

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "subscribe my channel",
         sub: "Subscribe",
         imageUrl: 1
      };
    }
    styles = {
        fontstyle: "italic",
        color: "purple"
    };
    Buttonchange= () =>{
        this.setState ({
            message: "Hit the bell icon to never miss an update",
            sub: "subscribed"
        })
    }
    
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
       <p/>
       <img src={this.state.imageUrl} alt=""/>
      </div>
    )
  }
}

export default NewComp
