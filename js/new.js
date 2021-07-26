$(document).ready(function(){
	
	//210527 모바일 검색항목
	/*var long2 =  $('.selectGroup').find('.searchSB').length; 
		
	if(long2 < 1){
		
		$('.selectGroup').css('display','none');
		
	}else if( long2 > 1 ){
		
		$('.selectGroup').css('display','block');
	
	}
	
	$('.mobileAppendArea .selectGroup').on('click',function(){
		
		var long =  $(this).find('.searchSB').length; 
		
		if( long < 1 ){
			
		console.log("long < 1");
		
		$('.mobileAppendArea .selectGroup').css('display','none');
		
		}
	});*/
	
	//알림버튼 토글
	
	/*$('.alarmBtn').on('click',function(){
		$(this).toggleClass('active');
	});*/
	
	
	//펼침 토글
	
	$('.foldBtn').on('click',function(){
		$(this).parents('.searchDetailArea').toggleClass('active');
	});
	
	
	$('.searchTab > ul > li').on('click',function(){
		$(this).addClass('active');
		
		$('.searchTab > ul > li').not(this).removeClass('active');
		
	});
	
	
	
	
	//탭 효과
		$('.tabJournal').on('click',function(){
			console.log(this);
			$(this).parents('.searchTab').siblings('.searchListArea').css('display','block');
			$(this).parents('.searchTab').siblings('.newsTickerArea').css('display','block');
			$(this).parents('.searchTab').siblings('.mobileAppendArea').css('display','none');
			$(this).parents('.searchTab').siblings('.listFoot').css('display','block');
		});
	
	
		$('.tabSearch').on('click',function(){
			$(this).parents('.searchTab').siblings('.searchListArea').css('display','none');
			$(this).parents('.searchTab').siblings('.newsTickerArea').css('display','none');
			$(this).parents('.searchTab').siblings('.mobileAppendArea').css('display','block');
			$(this).parents('.searchTab').siblings('.listFoot').css('display','none');
		});
	
	
	//210518 변경 스크롤 헤더 수정
	window.onscroll = function() {myFunction()};

		var header = document.getElementById("bnHead");
		var container = document.getElementById("container");
		var sticky = header.offsetTop;

		function myFunction() {			
			if($(window).width() > 959) {
			  if (window.pageYOffset > 157) {
				header.classList.add("sticky");
				container.classList.add("sticky");
			  } else {
				header.classList.remove("sticky");
				container.classList.remove("sticky");
			  }
			
			}
			
			if($(window).width() < 959) {
			  if (window.pageYOffset > 91) {
				header.classList.add("sticky");
				container.classList.add("sticky");
			  } else {
				header.classList.remove("sticky");
				container.classList.remove("sticky");
			  }
			
			}
	}
	
		/*//210504 추천 저널
		//210510 추천 저널 변경	
		  var swiper = new Swiper(".mySwiper", {
			slidesPerView: 6,
 			allowTouchMove: false,
			  spaceBetween: 24,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			}, breakpoints: {
				1147: {
					allowTouchMove: true,
					slidesPerView: 5
				},
				960: {
					allowTouchMove: true,
					slidesPerView: 5
				},
				640: {
					allowTouchMove: true,
					slidesPerView: 2.5
				}
			}
		  });*/
	
	
	
		//210504 전체북마크 토글	
		/*$('#dev_alram_btn').on('click',function(){
			$(this).toggleClass('on');
		});*/
	
});

	
	//키워드, 목차 토글
	
	$(document).on("click", ".sel-1", function(){
		$(this).parents('.searchDetailArea').toggleClass('active');
	});
	
	
	$('.searchTab > ul > li').on('click',function(){
		$(this).addClass('active');
		
		$('.searchTab > ul > li').not(this).removeClass('active');
		
	});
	
	$(document).on("click", ".sel-1", function(){
		$(this).parents('h3').siblings('.detail-con1').css('display','block');
		$(this).parents('h3').siblings('.detail-con2').css('display','none');
	});


	$(document).on("click", ".sel-2", function(){
		$(this).parents('h3').siblings('.detail-con2').css('display','block');
		$(this).parents('h3').siblings('.detail-con1').css('display','none');
	});






	//펼침 토글
	
	$(document).on("click", ".selTab", function(){
		$(this).addClass('active');
		
		$('.selTab').not(this).removeClass('active');
		
	});
	
	

	
	//최근 본 자료 토글
	
	$(document).on("click", ".viewBtn > .prev", function(){
		$(this).addClass('active');
		$(this).siblings('a').removeClass('active');
		$(this).parents('.viewBottom').siblings('.viewList').find('.viewL1').css('display','block');
		$(this).parents('.viewBottom').siblings('.viewList').find('.viewL2').css('display','none');
	});


	$(document).on("click", ".viewBtn > .next", function(){
		$(this).addClass('active');
		$(this).siblings('a').removeClass('active');
		$(this).parents('.viewBottom').siblings('.viewList').find('.viewL2').css('display','block');
		$(this).parents('.viewBottom').siblings('.viewList').find('.viewL1').css('display','none');
	});





	// 리뷰 버튼 박스
	
	$(document).on("mouseenter", ".reviewMenu", function(){
			$(this).parents('li.item').find('.btnBox').addClass('active');
		});

	
	$(document).on("mouseleave", "li.item", function(){
			$(this).find('.btnBox').removeClass('active');
		});



	// 모달 닫기
	
	/*$(document).on("click", ".closeModal", function(){
			$(this).parents('#openPopLayer').css('display','none');
		});*/



	// 추천논문
	
	/*$(document).on("click", "#nodeSave_btm", function(){
		if(getCookie("downloadPop") != "N"){
			$('.recomWrap').css('display','block');
			$('#pub_modalRecommendThesis').css('display','block');
			$('body').addClass('modalOpen');
		
			$('#recommList').find('.item').eq(1).find('.bookTool-1').css('display','block');
			setTimeout(function() { $(".bookTool-1").fadeOut(500); }, 5000);
		}
	});
	
	$(document).on("click", "button[name='nodeSave_btm']", function(){
		if(getCookie("downloadPop") != "N"){
			$('.recomWrap').css('display','block');
			$('#pub_modalRecommendThesis').css('display','block');
			$('body').addClass('modalOpen');
		
			$('#recommList').find('.item').eq(1).find('.bookTool-1').css('display','block');
			setTimeout(function() { $(".bookTool-1").fadeOut(500); }, 5000);
		}
	});*/
	
	$(document).on("click", ".close", function(){
			$(this).parents('.recomWrap').css('display','none');
			$(this).parents('body').removeClass('modalOpen');
	});

	/*오늘 하루 안보기*/
	$(document).on("click", "#pub_today_check_01", function(){
		$.fn.closeLayer('#pub_modalRecommendThesis');
		$('.recomWrap').css('display','none');
		$('#pub_modalRecommendThesis').css('display','none');
		$('body').removeClass('modalOpen');
		setCookie("downloadPop","N",1);
		$('.recomWrap').css('display','none');
	});
	

	//탭 인용얀식
	$(document).ready(function(){

		$('ul#dev_quoteList li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul#dev_quoteList li').removeClass('current');
			$('.scConbox').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		})

	});

	// 댓글 버튼
	/*$(document).on('click','.btnReple',function(){
		$(this).addClass('active');
	});*/

	// 인용 수, 내 서재 툴팁

	$(document).on('mouseenter','.quote',function(){
		$(this).parents('.author-wrap').siblings('.quoteEx').css('display','block');
	});
	$(document).on('mouseleave','.quote',function(){
		$(this).parents('.author-wrap').siblings('.quoteEx').css('display','none');
	});

	$(document).on('mouseenter','.bookmark',function(){
		$(this).parents('.author-wrap').siblings('.bookmarkEx').css('display','block');
	});
	$(document).on('mouseleave','.bookmark',function(){
		$(this).parents('.author-wrap').siblings('.bookmarkEx').css('display','none');
	});


	// 210603 우측 높이값 수정
	$(document).ready(function(){
		setInterval(function() { 
			var full = $('.contWrap').height();
			$(".asideWrap").css({'height':($(".contWrap").height()+'px')});
		}, 100);
	});


	// 210603 우측 고정위치 수정
	$(document).ready(function(){
		
		setInterval(function() { 
			var full = $('.newFloat').height()+50;
			$('.newFloat').css({ 'top': 'calc(100% - ' + full+ 'px)' });
		}, 100);
	});

	//모바일 하단 버튼 클릭 이벤트

	$(document).on('click','.bookmarkMob',function(){
		
			$(this).addClass('selected');
			$('.mobilePop').css('display','none');
			$('.mobilePop2').css('display','block');
			setTimeout(function() { $(".mobilePop2").fadeOut(500); }, 5000);
		
	});

	$(document).on('click','.quoteMenu',function(){
		
			$('.mobilePop').css('display','none');
		
	});

	$(document).on('click','.bookmarkMob.selected',function(){
		
			$(this).removeClass('selected');
			$('.mobilePop').css('display','none');
			$('.mobilePop3').css('display','block');
			setTimeout(function() { $(".mobilePop3").fadeOut(500); }, 5000);
		
	});

	// 권호페이지 상단 접기/펼치기
	$(document).on('click','.udBtn',function(){
		$(this).parents('.searchDetailArea.coverImage').toggleClass('active');
		$(this).parents('.sdAuthor').toggleClass('active');
	});



    //210518 권호 모바일 탭
	$(document).ready(function(){

		$('.publicTab > ul > li').on('click',function(){
			$(this).addClass('active');

			$('.publicTab > ul > li').not(this).removeClass('active');

	});




	//탭 효과
	//210520 저널 탭 추가
	$('.tabSubjec').on('click',function(){
		$(this).parents('.publicTab').siblings('.moveOther').css('display','block');
		$(this).parents('.publicTab').siblings('.searchListArea').css('display','block');
		$(this).parents('.publicTab').siblings('.mobileAppendArea').css('display','none');
		$(this).parents('.publicTab').siblings('.jTab,.jTab2,.jTab3').css('display','block');
	});


	$('.tabList').on('click',function(){
		$(this).parents('.publicTab').siblings('.moveOther').css('display','none');
		$(this).parents('.publicTab').siblings('.searchListArea').css('display','none');
		$(this).parents('.publicTab').siblings('.mobileAppendArea').css('display','block');
		$(this).parents('.publicTab').siblings('.jTab,.jTab2,.jTab3').css('display','none');
	});
        
        
        
        
        
	
    //210522 저널 탭 추가
	$('.authorTab > ul > li').on('click',function(){
		$(this).addClass('active');
		
		$('.authorTab > ul > li').not(this).removeClass('active');
		
	});
        
        
    //210522 저널 탭 추가
	$('.tabSubjec').on('click',function(){
		$(this).parents('.authorTab').siblings('.authorKeyword').css('display','block');
		$(this).parents('.authorTab').siblings('.authorJournal').css('display','block');
		$(this).parents('.authorTab').siblings('.mobileAppendArea').css('display','none');
	});


	$('.tabList').on('click',function(){
		$(this).parents('.authorTab').siblings('.authorKeyword').css('display','none');
		$(this).parents('.authorTab').siblings('.authorJournal').css('display','none');
		$(this).parents('.authorTab').siblings('.mobileAppendArea').css('display','block');
	});
        
        
});
	//210521 북마크 클릭, 호버 이벤트 변경
	
    $(document).ready(function(){
	    $(window).load(function () {
			$('.listBody').find('.item').eq(1).find('.bookTool-1').css('display','block');
			setTimeout(function() { $(".bookTool-1").fadeOut(500); }, 10000);
		});
	
	    $(document).on('mouseenter', '.bmList', function(){
	    	var bmcheck = $(this).attr('class');

	    	if(bmcheck.indexOf("none") > -1){
	    		$(this).parents('.listBox').find('.bookTool-n').css('display','block');
	    	}
		});
		$(document).on('mouseleave', '.bmList', function(){
			$(this).parents('.listBox').find('.bookTool-n').css('display','none');
		});
	    
		/*$('.bmList').mouseenter(function(){
			$(this).parents('.listBox').find('.bookTool-n').css('display','block');
		});
		$('.bmList').mouseleave(function(){
			$(this).parents('.listBox').find('.bookTool-n').css('display','none');
		});*/
	
		$('.bmList').on('click',function(){
			if( $(this).hasClass('none') ){
				
				$('.bookToolAll').css('display','none');
				$(this).removeClass('none');
				$(this).addClass('on');
				$(this).parents('.listBox').find('.bookTool-3').css('display','none');
				$(this).parents('.listBox').find('.bookTool-2').css('display','block');
				setTimeout(function() { $(".bookTool-2").fadeOut(500); }, 10000);
				
			
			}else if( $(this).hasClass('on') ){
				
				$('.bookToolAll').css('display','none');
				$(this).removeClass('on');
				$(this).addClass('none');
				$(this).parents('.listBox').find('.bookTool-2').css('display','none');
				$(this).parents('.listBox').find('.bookTool-3').css('display','block');
				setTimeout(function() { $(".bookTool-3").fadeOut(500); }, 10000);
				e.stopPropagation();
			}
		});
	});



	
	//210521 추천논문 내 북마크 오버 , 북마크 클릭, 호버 이벤트 변경 
	
    $(document).ready(function(){
	    $(window).load(function () {
			$('.listBody').find('.item').eq(1).find('.bookTool-1').css('display','block');
			setTimeout(function() { $(".bookTool-1").fadeOut(500); }, 10000);
		});

	    $(document).on('mouseenter', '.modalMark', function(){
	    	var bmcheck = $(this).attr('class');

	    	if(bmcheck.indexOf("none") > -1){
	    		$(this).parents('.item').find('.bookTool-n').css('display','block');
	    	}
		});
		$(document).on('mouseleave', '.modalMark', function(){
			$(this).parents('.item').find('.bookTool-n').css('display','none');
		});
	    
		/*$('.modalMark').mouseenter(function(){
			$(this).parents('.item').find('.bookTool-n').css('display','block');
		});
		$('.modalMark').mouseleave(function(){
			$(this).parents('.item').find('.bookTool-n').css('display','none');
		});*/
	
		$(document).on('click', '.modalMark', function(){
			if( $(this).hasClass('none') ){
				
				$('.bookToolAll').css('display','none');
				$(this).parents('.item').find('.bookTool-2').css('display','none');
				$(this).parents('.item').find('.bookTool-3').css('display','block');
				setTimeout(function() { $(".bookTool-2").fadeOut(500); }, 10000);
				
			
			}else if( $(this).hasClass('on') ){
				
				$('.bookToolAll').css('display','none');
				$(this).parents('.item').find('.bookTool-3').css('display','none');
				$(this).parents('.item').find('.bookTool-2').css('display','block');
				setTimeout(function() { $(".bookTool-3").fadeOut(500); }, 10000);
			}
		});
		
		/*$('.modalMark').on('click',function(){
			if( $(this).hasClass('none') ){
				
				$('.bookToolAll').css('display','none');
				$(this).removeClass('none');
				$(this).addClass('on');
				$(this).parents('.item').find('.bookTool-3').css('display','none');
				$(this).parents('.item').find('.bookTool-2').css('display','block');
				setTimeout(function() { $(".bookTool-2").fadeOut(500); }, 5000);
				
			
			}else if( $(this).hasClass('on') ){
				
				$('.bookToolAll').css('display','none');
				$(this).removeClass('on');
				$(this).addClass('none');
				$(this).parents('.item').find('.bookTool-2').css('display','none');
				$(this).parents('.item').find('.bookTool-3').css('display','block');
				setTimeout(function() { $(".bookTool-3").fadeOut(500); }, 5000);
				e.stopPropagation();
			}
		});*/
	});



	
	//210520 저널페이지 첫번째탭

    $(document).ready(function(){

        var tabBtn = $(".jBtn > ul > li");  
        var tabCont = $(".jCon");   

        tabCont.hide().eq(0).show();

        tabBtn.click(function(){
              var target = $(this);      
              var index = target.index();  

              tabBtn.removeClass("active");  
              target.addClass("active");  
              tabCont.css("display","none");
              tabCont.eq(index).css("display","block");
        });
    });   

	
	//210520 저널페이지 두번째탭

    $(document).ready(function(){

        var tabBtn2 = $(".jBtn2 > ul > li");  
        var tabCont2 = $(".jCon2");   

        tabCont2.hide().eq(0).show();

        tabBtn2.click(function(){
              var target2 = $(this);      
              var index2 = target2.index();  

              tabBtn2.removeClass("active");  
              target2.addClass("active");  
              tabCont2.css("display","none");
              tabCont2.eq(index2).css("display","block");
        });
    });   
	
	//210520 저널페이지 세번째탭

    $(document).ready(function(){

        var tabBtn3 = $(".jBtn3 > ul > li");  
        var tabCont3 = $(".jCon3");   

        tabCont3.hide().eq(0).show();

        tabBtn3.click(function(){
              var target3 = $(this);      
              var index3 = target3.index();  

              tabBtn3.removeClass("active");  
              target3.addClass("active");  
              tabCont3.css("display","none");
              tabCont3.eq(index3).css("display","block");
        });
    });   


	//210521 저널 스와이퍼 슬라이드 

    /*$(document).ready(function(){
		  var swiper = new Swiper(".journalSwiper", {
			slidesPerView: 1,
 			allowTouchMove: true,
			  spaceBetween: 40,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			}
		  });
    });   */


	//210520 필터 슬라이드
	$(document).on('click','.btnToggleP',function(){
			$(this).parents('.filterGroup').siblings().find('.btnToggleP').removeClass('open');$(this).parents('.filterGroup').siblings().find('.eHideSec').slideUp(300);
			$(this).toggleClass('open');
			$(this).parents('.filterGroup').find('.eHideSec').slideToggle(300);
	});


	//210521 저자페이지 더보기 클릭
	$(document).on('click','.keywordFoot',function(){
		$(this).siblings('.keyword').addClass('on');
		$(this).remove();
	});
	
	$(document).ready(function(){
		
		$('.contLeft').resize(function() {
			$('.searchP > .inner').height($('.contLeft').height());
		});

		$('.contLeft').trigger('resize');
	});
	

	//210521 체크박스 스와이퍼 슬라이드 

    /*$(document).ready(function(){
		  var swiper = new Swiper(".chkSwiper", {
			slidesPerView: 3,
 			allowTouchMove: false,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			}, breakpoints: {
				1147: {
					allowTouchMove: true,
                    slidesPerView: 2.5
				},
				960: {
					allowTouchMove: false,
                    slidesPerView: 2
				},
				900: {
					allowTouchMove: true,
                    slidesPerView: 2
				},
				640: {
					allowTouchMove: true,
                    slidesPerView: 2
				}
			}
		  });
		
    });*/   





	//210524  저자정보부분 박스 호버
	
	$(document).on("mouseenter", ".btnMore", function(){
			$(this).siblings('.opWrap').css('display','block');
		});

	$(document).on("mouseleave", ".headingArea", function(){
			$(this).find('.opWrap').css('display','none');
		});




	
	//210525 저자 페이지 페이징 더보기 방식 변경
	
    /*$(document).ready(function(){
	
		$('.authorP .listFoot').on('click',function(){
			if($(window).width() > 959){
				
				$(this).siblings('.listBody').find('.item.hidden').removeClass('hidden');
				$(this).siblings('.paging').css('display','block');
				$(this).remove();
				
			
			}else if( $(window).width() < 959){
				
				$(this).siblings('.listBody').find('.item.hidden').removeClass('hidden');
			}
		});
	});*/



	//새로운 드랍다운 셀렉트 박스 210525
		
	/*$(document).on('click','.dropdown', function() {
		$(this).parents().siblings().find('.dropdown').removeClass('open');
	});

	$(document).on('click','.dropdown > .caption', function() {
		$(this).parent().toggleClass('open');
	});

	$(document).on('click','.dropdown > .list > .item', function() {
		$('.dropdown > .list > .item').removeClass('selected');
		$(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
	});


	$(document).on('click', function(evt) {
		if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
			$('.dropdown').removeClass('open');
		}
	});*/



  //210602 저널페이지  툴팁

	$(document).on('mouseenter','.useCont',function(){
		
			if($(window).width() > 959){
				$(this).find('.bookmarkEx').css('display','block');
			}
	});
	$(document).on('mouseleave','.useCont',function(){
		$(this).find('.bookmarkEx').css('display','none');
	});



	$(document).on('mouseenter','.usedCont',function(){
		
			if($(window).width() > 959){
				$(this).find('.quoteEx').css('display','block');
			}
	});
	$(document).on('mouseleave','.usedCont',function(){
		$(this).find('.quoteEx').css('display','none');
	});
	

    
  //210526 상세페이지 북마크

	$(document).on('click','.bookmarkMob',function(){
		$(this).addClass('mobToolon');
		$('.mobTool-3').css('display','none');
		$('.mobTool-2').css('display','block');
		setTimeout(function() { $(".mobTool-2").fadeOut(500); }, 5000);
	});



	$(document).on('click','.mobToolon',function(){
		$('.mobTool-2').css('display','none');
		$('.mobTool-3').css('display','block');
		$(this).removeClass('mobToolon');
		setTimeout(function() { $(".mobTool-3").fadeOut(500); }, 5000);
	});