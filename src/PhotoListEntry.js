import React from 'react';

const PhotoListEntry = (props) => {
    return (
      <tr onClick={() => props.onPhotoSelect(props.photo.image)} className="photo-list-entry">
        <td className="title">{props.photo.name}</td>
      </tr>

    ) 
};

PhotoListEntry.proptypes = {
  photo: React.PropTypes.object.isRequired
} 

export default PhotoListEntry