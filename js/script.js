var slider=$('.slider');
slider.wrap('<div class="slider_place" data-index="0"></div>');
slider.after('<a href="" class="next"></a><a href="" class="prev"></a>')
$('body').on("click",".next",
	function(e){
		e.preventDefault();
		var current=+slider.parents('.slider_place').attr('data-index');
		++current;
		if(current<slider.find('.slider_main').length){
			slider.animate({'margin-left':-(slider.parents('.slider_place').width()*current)},800)
			slider.parents('.slider_place').attr('data-index',current)		
		}
	}
)
$('body').on("click",".prev",
	function(e){
		e.preventDefault();
		var current=+slider.parents('.slider_place').attr('data-index');
		--current;
		if(current>=0){
			slider.stop().animate({'margin-left':-(slider.parents('.slider_place').width()*current)},800)
			slider.parents('.slider_place').attr('data-index',current)		
		}
	}
)


$('.img1').click(function(){
	$('.pop_up_1,.pop_up_bg').show();
	$('.pop_up_1').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_1').height()/2,
		"left":$(window).width()/2-$('.pop_up_1').width()/2
	})
})

$('.pop_up_bg').click(
	function(){
		$('.pop_up_1, .pop_up_bg').hide();
	}
)

$('.img2').click(function(){
	$('.pop_up_2,.pop_up_bg').show();
	$('.pop_up_2').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_2').height()/2,
		"left":$(window).width()/2-$('.pop_up_2').width()/2
	})
})

$('.pop_up_bg').click(
	function(){
		$('.pop_up_2, .pop_up_bg').hide();
	}
)

$('.img3').click(function(){
	$('.pop_up_3,.pop_up_bg').show();
	$('.pop_up_3').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_3').height()/2,
		"left":$(window).width()/2-$('.pop_up_3').width()/2
	})
})

$('.pop_up_bg').click(
	function(){
		$('.pop_up_3, .pop_up_bg').hide();
	}
)

$('.img4').click(function(){
	$('.pop_up_4,.pop_up_bg').show();
	$('.pop_up_4').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_4').height()/2,
		"left":$(window).width()/2-$('.pop_up_4').width()/2
	})
})

$('.pop_up_bg').click(
	function(){
		$('.pop_up_4, .pop_up_bg').hide();
	}
)

$('.img5').click(function(){
	$('.pop_up_5,.pop_up_bg').show();
	$('.pop_up_5').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_5').height()/2,
		"left":$(window).width()/2-$('.pop_up_5').width()/2
	})
})

$('.pop_up_bg').click(
	function(){
		$('.pop_up_5, .pop_up_bg').hide();
	}
)

$('.img6').click(function(){
	$('.pop_up_6,.pop_up_bg').show();
	$('.pop_up_6').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_6').height()/2,
		"left":$(window).width()/2-$('.pop_up_6').width()/2
	})
})

$('.pop_up_bg').click(
	function(){
		$('.pop_up_6, .pop_up_bg').hide();
	}
)



$('.img_1').click(function(){
	$('.pop_up_inst_1,.pop_up_inst_bg').show();
	$('.pop_up_inst_1').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_inst_1').height()/2,
		"left":$(window).width()/2-$('.pop_up_inst_1').width()/2
	})
})

$('.pop_up_inst_bg').click(
	function(){
		$('.pop_up_inst_1, .pop_up_inst_bg').hide();
	}
)

$('.img_2').click(function(){
	$('.pop_up_inst_2,.pop_up_inst_bg').show();
	$('.pop_up_inst_2').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_inst_2').height()/2,
		"left":$(window).width()/2-$('.pop_up_inst_1').width()/2
	})
})

$('.pop_up_inst_bg').click(
	function(){
		$('.pop_up_inst_2, .pop_up_inst_bg').hide();
	}
)


$('.img_3').click(function(){
	$('.pop_up_inst_3,.pop_up_inst_bg').show();
	$('.pop_up_inst_3').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_inst_3').height()/2,
		"left":$(window).width()/2-$('.pop_up_inst_1').width()/2
	})
})

$('.pop_up_inst_bg').click(
	function(){
		$('.pop_up_inst_3, .pop_up_inst_bg').hide();
	}
)

$('.img_4').click(function(){
	$('.pop_up_inst_4,.pop_up_inst_bg').show();
	$('.pop_up_inst_4').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_inst_4').height()/2,
		"left":$(window).width()/2-$('.pop_up_inst_4').width()/2
	})
})

$('.pop_up_inst_bg').click(
	function(){
		$('.pop_up_inst_4, .pop_up_inst_bg').hide();
	}
)

$('.img_5').click(function(){
	$('.pop_up_inst_5,.pop_up_inst_bg').show();
	$('.pop_up_inst_5').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_inst_5').height()/2,
		"left":$(window).width()/2-$('.pop_up_inst_1').width()/2
	})
})

$('.pop_up_inst_bg').click(
	function(){
		$('.pop_up_inst_5, .pop_up_inst_bg').hide();
	}
)

$('.img_6').click(function(){
	$('.pop_up_inst_6,.pop_up_inst_bg').show();
	$('.pop_up_inst_6').css({
		"top":$(window).scrollTop()+$(window).height()/2-$('.pop_up_inst_6').height()/2,
		"left":$(window).width()/2-$('.pop_up_inst_6').width()/2
	})
})

$('.pop_up_inst_bg').click(
	function(){
		$('.pop_up_inst_6, .pop_up_inst_bg').hide();
	}
)

function show_menu(){
			$(this)
				.toggleClass('clicked')
						 // обратились к элементу с которым ассоциировано событие
				.siblings('ul') // обращение к сестринским 
				.slideToggle().parent('nav')
				.toggleClass('ready')
				.end()
				.end()
		}
$('.show_menu').click(show_menu);





