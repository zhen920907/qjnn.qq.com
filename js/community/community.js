// $(function() {
//   $('#tabs').carouFredSel({
//     circular: false,
//     items: 1,
//     width: '100%',
//     auto: false,
//     pagination: {
//       container: '#pager',
//       anchorBuilder: function( nr ) {
//         return '<a href="#">' + $(this).find('h3').text() + '</a>';
//       }
//     }
//   });
//   $('#tabs').mouseleave(function(){
//     return null;
//   });
// });


// tab Start

// $('#myTabs a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// });

// ??????
// console.log($('#myTabs a[href="#profile"]'))
// $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
// $('#myTabs a:first').tab('show') // Select first tab
// $('#myTabs a:last').tab('show') // Select last tab
// $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)

$(".solution-more-slide").slide({
  effect: 'fold'
});
// tab End
// go top
	/* ----- 侧边悬浮 ---- */
	$(document).on("mouseenter", ".suspension .a", function(){
		var _this = $(this);
		var s = $(".suspension");
		var isService = _this.hasClass("a-service");
		var isServicePhone = _this.hasClass("a-service-phone");
		var isQrcode = _this.hasClass("a-qrcode");
		if(isService){ s.find(".d-service").show().siblings(".d").hide();}
		if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
		if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
	});
	$(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
		$(".suspension").find(".d").hide();
	});
	$(document).on("mouseenter", ".suspension .a-top", function(){
		$(".suspension").find(".d").hide(); 
	});
	$(document).on("click", ".suspension .a-top", function(){
		$("html,body").animate({scrollTop: 0});
	});
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		var $top = $(".suspension .a-top");
		if(st > 400){
			$top.css({display: 'block'});
		}else{
			if ($top.is(":visible")) {
				$top.hide();
			}
		}
	});
