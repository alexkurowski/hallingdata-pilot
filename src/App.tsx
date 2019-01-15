import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './reducers';
import { Main } from './containers/Main';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    );
  }
}
