import React, { Component } from 'react';
export default class add extends Component {
  state = {
    textValue: '',
  };
  submit() {
    if (this.textValue === '') {
      alert('请输入内容!');
      return false;
    }
    console.log(this.state.textValue);
    this.props.mock.push({
      content: this.state.textValue,
      time: new Date().getTime() + '',
      checked: false,
    });
    this.setState({
      textValue: '',
    });
    this.output(this.props.mock);
  }
  change(event) {
    this.setState({ textValue: event.target.value });
  }
  output(mock) {
    this.props.onChange(mock);
  }
  delete() {
    const mock = this.props.mock.filter(value => {
      if (!value.checked) {
        return value;
      }
    });
    this.output(mock);
  }
  render() {
    return (
      <div className="add-wrap">
        <input
          type="button"
          className="btn btn-group btn-danger float-left"
          value={'删除'}
          onClick={this.delete.bind(this)}
        />
        <textarea rows="3" value={this.state.textValue} onChange={this.change.bind(this)} />
        <input
          type="button"
          className="btn btn-group btn-primary float-right"
          value={'确定'}
          onClick={this.submit.bind(this)}
        />
      </div>
    );
  }
}
