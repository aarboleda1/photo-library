import React from 'react';
const PhotoViewer = ({photo}) => {

    return (
      <img alt={photo} src={photo}></img>
    ) 
  
}

// PhotoViewer.proptypes = {
//   photo: React.PropTypes.object.isRequired
// } 


export default PhotoViewer; 