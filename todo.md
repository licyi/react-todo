# todo-1

> sass 安装好了，暂时不用，今天先实现 todo 的功能，很简单，就是显示 todo 的列表，可以添加一个 todo

> 先删除无用的代码，把 src 目录下的无用文件删除掉，具体可看[github](https://github.com/jiangxd2016/react-todo)

- 在 src 的目录下，创建 2 个文件夹，一个是 list，就是 todo 的列表，一个是 add，就是添加的。以后文件操作都在 src 目录下
- 模拟数据，新建 mock.js，内容如下

```javascript
const mock = [
  { content: "吃饭", time: "1528436867000" },
  { content: "睡觉", time: "1528436867000" },
  { content: "打豆豆", time: "1528436867000" }
];
export default mock;
```

- 修改 app.js ，导入 list，add，和 mock

```javascript
import Mock from "./mock";
import List from "./list/list";
import Add from "./add/add";
```

- 编写列表的展示
  > 重要的就是 2 处，循环代码和输出，用 map（es6 的循环）遍历数据，生成 li 标签，render 渲染代码，

```javascript
this.mock.map((value, i) => (
  <li key={i}>
    <input type="checkbox" />
    {value.content}
    <span>{this.dateFormatter(value.time)}</span>
  </li>
));
```

```javascript
  render() {
    return <ul>{this.listMap()}</ul>;
  }
```

- 添加的方法，就得和父组件通信，通过 props 拿到父组件的方法，把值传进入，父组件直接改变 mock 的值，就可以直接改变 list 列表的值
  >

```javascript
import React, { Component } from "react";
export default class add extends Component {
  constructor(props) {
    super(props);
    this.textValue = "";
    this.mock = props.mock;
  }
  submit() {
    this.props.mock.push({
      content: this.textValue,
      time: new Date().getTime()
    });
    this.props.onChange(this.props.mock);
  }
  change(event) {
    this.textValue = event.target.value;
  }
  render() {
    return (
      <div>
        <textarea
          value={this.props.textValue}
          onChange={this.change.bind(this)}
        />
        <input type="button" value={"确定"} onClick={this.submit.bind(this)} />
      </div>
    );
  }
}
```
