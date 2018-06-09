import React, { Component } from 'react';
import Mock from './mock';
import List from './list/list';
import Add from './add/add';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Mock,
    };
  }
  onChange(mock) {
    this.setState({ Mock: mock });
  }
  render() {
    return (
      <div className="App container">
        <List mock={this.state.Mock} onChange={this.onChange.bind(this)} />
        <Add mock={this.state.Mock} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default App;
