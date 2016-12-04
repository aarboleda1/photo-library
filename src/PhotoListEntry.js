import React, { Component } from 'react';

class PhotoListEntry extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // should change state of photoViewer
    console.log('this is:', this.props);
    this.setState({photo: this.props.photo.image})
  }

  render () {
    return (
      <tr onClick={(e) => this.handleClick(e)} className="photo-list-entry">
        <td className="title">{this.props.photo.name}</td>
      </tr>

    ) 
  }
};

PhotoListEntry.proptypes = {
  photo: React.PropTypes.object.isRequired
} 

export default PhotoListEntry