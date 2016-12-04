import React, { Component } from 'react';

class PhotoViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photo: 'http://tinyurl.com/n4vgcl5' 
    }
  }
  render () {
    return (
      <img alt={this.state.photo} src={this.state.photo}></img>
    ) 
  }
}

// PhotoViewer.proptypes = {
//   photo: React.PropTypes.object.isRequired
// } 


export default PhotoViewer; 