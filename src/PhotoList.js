import React from 'react';
import PhotoListEntry from './PhotoListEntry'

const PhotoList = (props) => {
    return (
      <table>
        <tbody>
          {props.photoList.map((photo, index) => {
            return <PhotoListEntry onPhotoSelect={props.onPhotoSelect} key={index} photo={photo} />
          })}
        </tbody>
      </table>
    ) 
}

PhotoList.proptypes = {
  photoList: React.PropTypes.array.isRequired
} 




export default PhotoList; 

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
window.photoData = photoData;
