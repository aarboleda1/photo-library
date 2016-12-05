import React, { Component } from 'react';
import './App.css';
import PhotoList from './PhotoList';
import PhotoViewer from './PhotoViewer'; 
import UrlForm from './UrlForm';

class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      photo: this.props.photoList[0].image,
      photoList: this.props.photoList,
    }
  }

  receiveForm(photo) {   
    var newPhoto = {
      image: photo.image,
      name: photo.name
    }
    this.props.photoList.push(newPhoto);    
    this.setState({
      photo: photo.image,
      photoList: this.props.photoList
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Photo Library App</h2>
          <UrlForm receiveForm={this.receiveForm.bind(this)}/>
          <PhotoList photoList={this.props.photoList} onPhotoSelect={selectedPhoto => this.setState({photo: selectedPhoto})}/>          
        </div>
        <PhotoViewer photo={this.state.photo} />
      </div>
    )
  }
}

export default App;
