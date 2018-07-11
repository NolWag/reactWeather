import React, { Component } from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCity: ''
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      newCity: e.target.value
    })
  }

  handleClick() {
    console.log('hi')
  }

  render() {
    return(
      <div>
        <p>{this.props.location}</p>
        <p>{this.props.temp}</p>
        <p onClick={this.handleClick}>+</p>
        <div className="postalInput">
          <input
            type="text"
            value={this.state.newCity}
            onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default City
