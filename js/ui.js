/* 추가된 함수  */
function resizeTooltip() {
    // console.log('6초지남');
    $(".popup_tooltip.tooltip_new").removeClass('wide');
    
    
}
$(window).on('load', function(){
    // 기존 소스와 중복이니 이건 삭제하셔도 됩니다.    
    var animateSlide = 1500;
    $(".popup_tooltip.tooltip_new").show().animate({right:115, opacity:1}, animateSlide);

    // 추가돤 실행 소스
    setTimeout("resizeTooltip()", 6000);
    
    $('.popup_tooltip.tooltip_new').hover(function() { //mouseenter에 해당하는 이벤트핸들러 
        $(this).addClass('wide'); }, function() { //mouseleave에 해당하는 이벤트 핸들러 
            $(this).removeClass('wide'); 
    });

    $("#btnTop").click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 200);
		return false;
	});
    var windowWidth = $(this).width();
    console.log(windowWidth);
    
    $(window).scroll(function() {
        if ( windowWidth < 959 ) {
            if ($(this).scrollTop() > 500) {
                $('.gTopNavi').fadeIn(50);
            } else {
                $('.gTopNavi').fadeOut(50);
            }
        }
        
    });

    // 참고: top 버튼 적용
	

});
