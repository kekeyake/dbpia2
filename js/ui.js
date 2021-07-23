/* 추가된 함수  */
function resizeTooltip() {
    // console.log('6초지남');
    $(".popup_tooltip.tooltip_new").removeClass('wide');
    
    
}
$(window).load( function() {
    // 기존 소스와 중복이니 이건 삭제하셔도 됩니다.    
    var animateSlide = 1500;
    $(".popup_tooltip.tooltip_new").show().animate({right:115, opacity:1}, animateSlide);

    // 추가돤 실행 소스
    setTimeout("resizeTooltip()", 6000);
    
    $('.popup_tooltip.tooltip_new').hover(function() { //mouseenter에 해당하는 이벤트핸들러 
        $(this).addClass('wide'); }, function() { //mouseleave에 해당하는 이벤트 핸들러 
            $(this).removeClass('wide'); 
    });

});
