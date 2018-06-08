 # react学习笔记
 >  混迹吾爱多年，从大学到了工作，现在从前端2年，工作中一直用vue开发，想学习一下react，记录一下自己的学习历程，也和大家分享一下

### tip
    不会写很多基础的东西，但是我尽量把用到的讲清楚
---

### 怎么样快速学习一下前端框架
 > 当然就是直接拿来做东西，不会的，不懂的，不知道的，再去查，当然最好还是去看一遍官方文档

### 做东西，怎么快速看到效果
> 最直接的，就是用脚手架，用fackbook官方出品的，create-react-app，可以直接写，webpack，什么的都已经配置好了，还是说一下理由吧，实际开发中，配置这些东西，都不会让你来做，要么有组长，leader配置好，要么就有现成的配置，而且配置这些东西，很繁琐，没有技术含量，就是水磨的功夫，不应该浪费时间在上面。
## 计划
- 做一个todo-list
- 做一个后台管理系统
---
## 开工
### 所需工具node [ 下载地址 ](https://pan.baidu.com/s/1lai3rqglWuC7uOs4VAIMTQ) 

>安装完成之后，打开cmd或者powershell,输入命令,查看版本
```  javascript
 node -v
``` 
> 安装create-react-app instal安装的意思  -g的意思就是全局安装，--save-dev就是保存到本目录
```  javascript
  npm install create-react-app -g
``` 
>安装完成之后， 用cmd命令，进入到自己放项目的目录,把you-app-name替换成你想创建app的名字
```  javascript
 npx create-react-app you-app-name
``` 
>安装完成之后，cd you-app-name 进入目录，运行项目
```  javascript
 npm run start
``` 
---
## 现在应该看到效果了,然后用编辑器打开项目
- node_modules目录，就是放置所以安装依赖的目录
- public目录，就是放置入口的目录
- src目录，就是以后战斗的地方，编写自己的代码的地方
- .gitignorew文件，是git提交忽略的目录
- package.json文件，就是所以安装

---
>  感觉自己讲的太基础了，太累了，不知道效果如何，欢迎大家评论，探讨

## 最后，感兴趣的同学可以尝试安装一下sass,并配置好，看一下src目录下的文件，尝试改一下，看看效果
---
# 明天开始写todo--list


