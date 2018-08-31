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
