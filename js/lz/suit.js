

//给图片按钮注册事件
$(function () {

    $('.btn-ico >li').click(function () {
        $(this).addClass("now").siblings().removeClass("now");

        //当前li的下标
        var idx = $(this).index();
        $('.section .tag_title .content_title').text($(this).find('a').attr('title'));

        $(".section .info > ul").eq(idx).show().siblings().hide();
    });

    //给下面所有图片注册鼠标经过事件
    var $lis = $(".section .info > ul > li");

     $lis.mouseenter(function () {
         $(this).css('opacity', 1).siblings().css('opacity',.5);

     });

    $(".section .info > ul").mouseleave(function () {
        $(this).children().css('opacity',1);

    });


});








