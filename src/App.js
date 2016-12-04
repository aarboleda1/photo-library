import React, { Component } from 'react';
import './App.css';
import PhotoList from './PhotoList';
import PhotoViewer from './PhotoViewer'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Photo Library App</h2>
          <PhotoList />          
        </div>
        <PhotoViewer />
      </div>
    )
  }
}

export default App;
