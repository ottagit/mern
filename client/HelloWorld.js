import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class HelloWorld extends Component {
  render() {
    return (
      <div>Hello MERN World</div>
    );
  }
}

export default hot(module)(HelloWorld);
