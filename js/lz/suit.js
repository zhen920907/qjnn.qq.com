
//给图片按钮注册事件
$(function () {
    $('.btn-ico >li').click(function () {
        $(this).addClass("now").siblings().removeClass("now");


        //当前li的下标
        var idx = $(this).index();
        console.log($(this).children().attr('title'));
        $('.section .tag_title .content_title').text($(this).children().attr('title'));

        $(".section .info > ul").eq(idx).show().siblings().hide();
    });

});








