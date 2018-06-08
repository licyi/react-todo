import React, { Component } from 'react';
export default class add extends Component {
  constructor(props) {
    super(props);
    this.textValue = '';
  }
  submit() {
    this.props.mock.push({ content: this.textValue, time: new Date().getTime() });
    this.props.onChange(this.props.mock);
  }
  change(event) {
    this.textValue = event.target.value;
  }
  render() {
    return (
      <div>
        <textarea value={this.props.textValue} onChange={this.change.bind(this)}
        />
        <input type="button" value={'确定'} onClick={this.submit.bind(this)} />
      </div>
    );
  }
}