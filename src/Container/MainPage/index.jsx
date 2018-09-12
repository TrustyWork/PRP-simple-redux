import React, { Component } from 'react';

import Ligth from 'Components/Ligth';
import Swither from 'Components/Swither';

import 'normalize.css';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Ligth />
        <Swither />
      </div>
    );
  }
}
