import React, { Component } from 'react';

import Menu from './containers/menu';
import Items from './containers/items';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component ={Menu}></Route>
        <Route path='/items/:id' component ={Items}></Route>
      </div>
    );
  }
}

export default App;
