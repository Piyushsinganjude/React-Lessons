import React, { Component } from 'react'
import "./App.css"
import NewComp from './components/NewComp';
class App extends React.Component {
    styles = {
        fontstyle: "bold",
        color: "teal"
    };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp/>
      </div>
    )
  }
}

export default App
