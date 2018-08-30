
$(document).ready(function () {
	//旋转木马
	Caroursel.init($('.caroursel'));
	
	//设置滑动栏
	$(".siderbar li a").click(function () {
		$(this).addClass("current").parent().siblings().children().removeClass("current");

	});
	$(".siderbar li").click(function () {
		console.log($(this).index());
		if ($(this).index()===0){
			$("html, body").stop(true).animate({
				scrollTop: 200
			}, 1000)
		}else if($(this).index()===1){
			$("html, body").stop(true).animate({
				scrollTop: 800
			}, 1000)
		}else if($(this).index()===2){
			$("html, body").stop(true).animate({
				scrollTop: 1200
			}, 1000)
		}else if($(this).index()===3){
			$("html, body").stop(true).animate({
				scrollTop: 2000
			}, 1000)
		}else if($(this).index()===4){
			$("html, body").stop(true).animate({
				scrollTop: 2600
			}, 1000)
		}
	});
	$(".siderbar li.top").click(function () {
		$("html, body").stop(true).animate({
			scrollTop: 0
		}, 1000)
	});
	
	//给新闻设置tab栏切换
	$(".tab li").bind({
		mouseenter: function () {
			$(this).css("cursor","pointer").addClass("current").siblings().removeClass("current");
			$(".news .content").eq($(this).index()).show().siblings(".content").hide();
			
		},
	});
	
	
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
		$(".feature .spans span").click(function () {
			$(this).addClass("current").siblings().removeClass("current");
			$(".feature .ts").animate({
				"left":-1200*$(this).index()
			});
			
		});
	
	//给同人视频添加背景图片
	$(".tongren .vu img").each(function (index) {
		$(this).attr("src","images/tongren/" +(1+index)+ ".png");
	})
	
	
});