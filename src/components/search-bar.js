// import of React is needed because of JSX
import React, { Component } from 'react';

class SearchBar extends Component { // class-based component
  render() {
    return <input onChange={this.handleInputChange}/>;
  }

  handleInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
