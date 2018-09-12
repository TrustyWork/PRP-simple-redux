import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import MainPage from 'Container/MainPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}
