import React, { Component } from 'react';
import PhotoListEntry from './PhotoListEntry'
var photoData = [
  {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? THey\'re terrifying.'
  }, 
  {
    name: 'JohnJohn',
    image: 'http://tinyurl.com/z7a6yfe',
    description: 'John-John'
  },
  {
    name: 'DesertPoint',
    image: 'http://tinyurl.com/he7smgv',
    description: 'Desert Point'
  }
];



class PhotoList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <table>
        <tbody>
          {photoData.map((photo) => {
            return <PhotoListEntry onPhotoSelect={this.props.onPhotoSelect} key={photo.name} photo={photo} />
          })}
        </tbody>
      </table>
    ) 
  }
}

PhotoList.proptypes = {
  photoList: React.PropTypes.array.isRequired
} 

export default PhotoList; 

