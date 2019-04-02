import React, { Component } from 'react';
import './App.css';
import RouterQtemu from './component/RouterQtemu';
import { Provider } from 'react-redux';
import { store } from './Redux/store';


class App extends Component {
  render() {    
    return (
      <Provider store={store}>
      <div className="App">
        <RouterQtemu/>
      </div>
      </Provider>

    );
  }
}

export default App;
