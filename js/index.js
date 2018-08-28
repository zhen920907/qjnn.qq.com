
$(document).ready(function () {
	//旋转木马
	Caroursel.init($('.caroursel'));
	
	//给游戏攻略里的技能介绍图片设置属性
	$(".skill li img").each(function (index) {
		$(this).css({
			width : 74+"px",
			height : 74+"px"
		});
		$(this).attr("src","images/jnjs/"+(index+1)+".png");
	});
	
	//给游戏特色里的li添加背景图片
	$(".feature li").each(function (index) {
		$(this).css({
			background:"url('images/yxts/" + (index+1) +".jpg') no-repeat"
		});
	});
	//给游戏特色添加点击翻页效果
	$(".feature .spans span").each(function (index) {
		$(this).click(function () {
			
			$(".feature .spans span").each(function (index,element) {
				$(element).removeClass("current");
			});
			$(this).addClass("current");
			$(".feature .ts").animate({
				"left":-1200*index
			});
			
		});
	});
	
	//给同人视频添加背景图片
	$(".tongren .vu img").each(function (index) {
		$(this).attr("src","images/tongren/" +(1+index)+ ".png");
		console.log(22);
	})
	
	
});