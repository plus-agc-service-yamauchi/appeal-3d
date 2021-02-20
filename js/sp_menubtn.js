//サイトアクセスの際にPCかSPか判断し、メニューを折り畳みする
var $win = $(window);

$win.on('load resize', function() {  
  if (window.matchMedia('(max-width:750px)').matches) {
    $('.spmenu-btn').next().slideUp();
    $('.spmenu-btn').addClass('active');
  } else {
    $('.spmenu-btn').next().slideDown();
    $('.spmenu-btn').removeClass('active');
  }
});

//スマホメニュー
$(function(){
    $('.spmenu-btn').on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});
