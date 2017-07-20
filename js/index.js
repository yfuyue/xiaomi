var swiper=new Swiper('.ban',{
        loop:'true',
        autoplay:3000,
        pagination:'.swiper-pagination',
        paginationClickble:true,
        autoplayDisableOnInteraction:false,
        nextButton:'.swiper-button-next',
        prevButton:'.swiper-button-prev',
//      spaceBetween:10,
        effect:"fade",
    });
    var swiper=new Swiper('.fan',{
        loop:'true',
        autoplay:3000,
        pagination:'.swiper-pagination',
        paginationClickble:true,
        autoplayDisableOnInteraction:false,
        nextButton:'.swiper-button-next',
        prevButton:'.swiper-button-prev',
        speed:2500,
//      spaceBetween:10,
//      effect:"fade",
    });
    $(".one li").on("click",function(){
//  	alert(111)
    	$(this).addClass("on").siblings().removeClass("on")
    	var ss=$(".main_1 .mmm")
    })
    $("#show").hover(function(){
    	$("#gou").stop().slideDown(1000);
    },function(){
    	$("#gou").stop().slideUp(1000);
    })
    //
    $("#slide1>li").hover(function(){
    	$(this).children("ul").stop(true).slideDown(1000);
    },function(){
    	$(this).children("ul").stop(true).slideUp(1000);
    })
    $("#slide2>li").hover(function(){
    	$(this).children("div").stop(true).fadeIn(800);
    },function(){
    	$(this).children("div").stop(true).fadeOut(1000);
    })
    
    	var index=0
		var len=$("#fan>div").length;
		function feng(index){
					var margin="-"+100*index+"%";
					$("#fan").css({"margin-left":margin,"-webkit-transition":"all 1s"})
				}
		var time=setInterval(dong,6000);
		function dong(){
					index++
					if(index>2-1){
						index=0
					}
					feng(index)
				}
				
				
//				len=$("#lunbo>li").length;
				$("#con2_right").click(function(){
					clearInterval(time)
					index++;
					if(index>2-1){
						index=2-1
					}
					feng(index)
				})
				$("#con2_left").click(function(){
					clearInterval(time)
					index--
					if(index<0){
						index=0
					}
					feng(index)
				})
				
				
			
			$('#ol1 li').click(function(){
//				alert(111)
				$('#ol1 li').removeClass('t7');
				$('#ul1>div').stop().hide()
				$(this).addClass('t7');
				$('#ul1>div').eq($(this).index()).stop().show()
			})
			$('#ol2 li').click(function(){
//				alert(111)
				$('#ol2 li').removeClass('t7');
				$('#ul2>div').stop().hide()
				$(this).addClass('t7');
				$('#ul2>div').eq($(this).index()).stop().show()
			})
			$('#ol3 li').click(function(){
//				alert(111)
				$('#ol3 li').removeClass('t7');
				$('#ul3>div').stop().hide()
				$(this).addClass('t7');
				$('#ul3>div').eq($(this).index()).stop().show()
			})
			$('#ol4 li').click(function(){
//				alert(111)
				$('#ol4 li').removeClass('t7');
				$('#ul4>div').stop().hide()
				$(this).addClass('t7');
				$('#ul4>div').eq($(this).index()).stop().show()
			})
    
    
    
    
    
    
