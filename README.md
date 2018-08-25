# qjnn.qq.com


## 1.项目架构

如下图,将对应的文件存放在对应的文件夹中.
项目中公共的js插件将存放在js文件夹中,css组件,将存放在css文件夹中.

###1.1获取项目架构

本项目使用github托管代码,并进行项目的版本迭代.


Github地址:

统一使用ssh方式提交和拉取代码:

git@github.com:gaoyuany/qjnn.qq.com.git

把github用户明天发给我.方便大家有共同的权限协作开发该项目

首先,从github拉取项目:

Git  Clone  git@github.com:gaoyuany/qjnn.qq.com.git

完成一定的功能,提交到远程仓库



1.将远程代码合并到本地,保证自己当前上传的代码是最新版本的   git pull
2.将修改的文件添加到本地仓库   git  add  .
3.查看当前本地仓库的状态 git status
4.将代码提交到本地仓库  git commit -m ‘本次对代码修改的注释,比如添加或者修改了什么功能’ 
5.将代码提交到远程仓库 git push -u origin master
6.远程仓库当前的版本就是当前提交的版本

###1.2变量命名

为什么要做变量命名?

防止全局环境的污染,假设一个变量名被多个人使用,就会造成被覆盖的状况,导致报错!!!

####CSS命名

1.类名 (默认按钮   button - default)单词不超过3个 ,禁止使用button1/button2/button3这种命名

2.ID名 (css中尽量不使用ID,避免与js冲突)

####Js命名

1.变量名(轮播图中的标志性变量  imgFlag  驼峰命名法  避免使flag/num/num1/num2)

2.函数名(驼峰命名法  避免使用function1/function2类似的函数名 不带有特殊符号)

3.避免使用$作为前缀,避免与jquery Api冲突

4.所有的变量名以及函数名前缀为自己名字首字母大写加下划线

(1)例如  G_getSum()

## 2.代码优化

> 代码是给机器运行的，可是机器总共才需要看它几分钟？你花一个月编写的程序，机器顶多两三分钟就编译好了——在这两三分钟之前，这代码不都是你在看吗？开发软件编写代码不是一朝一夕的事情，更多的情况下，一个软件的开发要经历很长的时间，并且常常由多人合作完成。一个庞大的软件项目，可能会动用上千名程序员工作数年！如果把代码写得连自己都看不明白，怎么与别人交流？同一个开发团队内，一定要保持良好且一致的代码风格，才能最大化地提高开发效率。

- 关键词:基于面向对象编程的开发  封装  调用

1.超过5行以上的功能开发,封装为函数,放在页面的最顶部(最终需要封装成为我们项目的工具库 ,类似于jquery)

2.注释和代码比例为  5:1(提高代码的可读性)

3.Html页面避免出现大量无用的标签(提高页面加载速度)

4.在js特效中使用的元素,需要在页面中处于定位的状态(减少页面的重绘与重排)

5.JavaScript代码以分号结束(在js压缩的时候避免出现语法错误的报错)

6.尽量避免使用全局变量!!!

7.养成为变量注释的好习惯.

图片存放位置  在images文件夹中新建自己姓名的文件夹,自己负责的页面图片,放在该文件夹中.

## 3.项目分工

张龙超		http://qjnn.qq.com/index.shtml

高源		http://bbs.g.qq.com/forum-56721-1.html

李珍http://qjnn.qq.com/webplat/info/news_version3/11785/23142/23145/23200/m14714/list_1.shtml

李丹		http://qjnn.qq.com/web201604/tese.html

黄慧桃		http://qjnn.qq.com/webplat/info/news_version3/11785/23142/23213/23214/m14781/list_1.shtml
