import React, { Component } from 'react';
export default class list extends Component {
  handleInputChange(i) {
    this.props.mock[i].checked = !this.props.mock[i].checked;
    this.props.onChange(this.props.mock);
  }

  listMap() {
    console.log(this.props.mock);

    return this.props.mock.map((value, i) => (
      <li key={i} className="list-group-item list-item">
        <input
          type="checkbox"
          className="checkbox float-left"
          checked={value.checked}
          onChange={this.handleInputChange.bind(this, i)}
          index={i}
        />
        <p className="float-left">{value.content}</p>
        <span className="float-right">{this.dateFormatter(value.time)}</span>
      </li>
    ));
  }

  dateFormatter(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    date = new Date(Number(date));
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
        );
    return fmt;
  }
  render() {
    return <ul className="list-group">{this.listMap()}</ul>;
  }
}
