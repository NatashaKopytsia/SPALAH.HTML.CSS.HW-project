var slider=$('.slider');
slider.wrap('<div class="slider_place" data-index="0"></div>');
slider.after('<a href="" class="next"></a><a href="" class="prev"></a>')
$('body').on("click",".next",
	function(e){
		e.preventDefault();
		//alert('!!!!')
		var current=+slider.parents('.slider_place').attr('data-index');
		++current;
		if(current<slider.find('.slider_main').length){
			slider.animate({'margin-left':-(slider.parents('.slider_place').width()*current)},200)
			slider.parents('.slider_place').attr('data-index',current)		
		}
	}
)
$('body').on("click",".prev",
	function(e){
		e.preventDefault();
		//alert('!!!!')
		var current=+slider.parents('.slider_place').attr('data-index');
		--current;
		if(current>=0){
			slider.stop().animate({'margin-left':-(slider.parents('.slider_place').width()*current)},200)
			slider.parents('.slider_place').attr('data-index',current)		
		}
	}
)
