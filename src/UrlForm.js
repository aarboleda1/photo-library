import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      name: ''
    }
  }

handleSubmit (event) {
  event.preventDefault();

  var url = document.getElementById('url').value;
  var title = document.getElementById('title').value;
  this.setState({
    image: url,
    name: title 
  }, this.checkState);


}

checkState () {
  this.props.receiveForm(this.state)
}

handleInputChange(e) {
  this.setState({
    value: e.target.value
  });
}

  render() {
    return (
      <form>     
        <label>
          Image URL:
          <input type="text" id="url" />
        </label>       
        <label>
          Image Title:
          <input type="text" id="title" />
        </label>
        <button type="submit" onClick={(event) => this.handleSubmit(event)}/>
      </form>
    );
  }
}

export default UrlForm;
  