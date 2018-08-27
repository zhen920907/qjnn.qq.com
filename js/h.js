// 游戏攻略部分的js
// // 少女通关的整个页面
// var girl = document.querySelector('.girl');
// // 公主通关的整个页面
// var princess = document.querySelector('princess');
// // 技能介绍的整个页面
// var skill = document.querySelector('.skill');
// // 
var contents = document.querySelectorAll('.content');


// banner部分
var baLis = document.querySelectorAll('.gl_banner li');
console.log(baLis);
for ( var i = 0 ; i < baLis.length ; i++) {
  baLis[i].index = i;
  baLis[i].onclick = function () {
    console.log(this.index);
    // 1 给nav设置颜色和下划线
    for ( var i = 0 ; i < baLis.length ; i++) {
      baLis[i].className = ''; 
    }
    this.className = 'liColor gl_line2';
    // 2 切换tab栏
    for ( var i = 0 ; i < contents.length ; i++) {
      contents[i].className = 'cy content';      
    }
    console.log(this.index);
    contents[this.index].className = ' content block ';
  }
};

// 少女和公主通关部分
var tgBoxs = document.querySelectorAll('.first_guan .box');
for ( var i = 0 ; i < tgBoxs.length ; i++) {
  tgBoxs[i].onmouseover = function() {
    this.style.cursor = 'pointer';
    this.style.background = 'url(../images/h_images/tg.png)';
  };
  tgBoxs[i].onmouseout = function() {
    this.style.cursor = '';
    this.style.background = 'url(../images/h_images/tg-ic.png)';
  }
}

// 