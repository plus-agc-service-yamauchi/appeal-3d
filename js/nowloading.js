$(function() {
  var h = $(window).height();

  $("#loader-bg ,#loader").height(h).css("display","block");
});

$(window).on("load", function () { //�S�Ă̓ǂݍ��݂�������������s
  $("#loader-bg").delay(900).fadeOut(800);
  $("#loader").delay(600).fadeOut(300);
});
 
//5�b�������狭���I�Ƀ��[�h��ʂ��\��
$(function(){
  setTimeout("stopload()",5000);
});
 
function stopload(){
  $("#loader-bg").delay(900).fadeOut(800);
  $("#loader").delay(600).fadeOut(300);
}