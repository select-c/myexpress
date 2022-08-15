创建Node + Express + ejs + bootstrap web网站：
1.安装Node.js+npm
2.安装supervisor(帮助监听代码，自动更新)
    npm install -g supervisor
3.安装Express
    npm install -g express
4.安装Express 应用程序生成器
    npm install -g express-generator
5.创建Express + ejs模板引擎框架项目  
    express -e myapp
6.运行项目
    修改package.json的
    修改前：
    "scripts": {
    "start": "node ./bin/www"
    }
    修改后：
    "scripts": {
    "start": "supervisor ./bin/www"
    }
    npm start
7.用Bootstrap设计界面 地址：https://www.bootcss.com/
    (1)npm install bootstrap@3
    (2)require('bootstrap') 代码的作用是加载 Bootstrap 的所有 jQuery 插件到 jQuery 对象上
8.安装jQuery(Bootstrap依赖jQuery) 地址：https://jquery.com/
    npm install jquery