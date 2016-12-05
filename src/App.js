import React, { Component } from 'react';
import './App.css';
import PhotoList from './PhotoList';
import PhotoViewer from './PhotoViewer'; 
var photo = {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  }
class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      photo: photo.image
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Photo Library App</h2>
          <PhotoList onPhotoSelect={selectedPhoto => this.setState({photo: selectedPhoto})}/>          
        </div>
        <PhotoViewer photo={this.state.photo} />
      </div>
    )
  }
}

export default App;
