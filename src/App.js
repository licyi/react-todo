import React, { Component } from 'react';
import Mock from './mock';
import List from './list/list';
import Add from './add/add';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Mock,
    };
  }
  onChange(mock) {
    this.setState(mock);
  }
  render() {
    return (
      <div className="App">
        <List mock={this.state.Mock} />
        <Add mock={this.state.Mock} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default App;
