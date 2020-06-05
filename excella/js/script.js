$(document).ready(function() {
	var toggleBlock = $('.nav-toggle-block'),
		toggleLine = $('.nav-toggle-line'),
		pageNav = $('.page-nav'),
		overlay = $('.overlay'),
		menuList = $('.menu-list').find('> li'),
		links = menuList.find('> a')

	toggleBlock.on('click', function(event) {
		$(this).toggleClass('open');
		toggleLine.toggleClass('active-line');
		pageNav.toggleClass('active');
		overlay.toggleClass('active');
	});

	overlay.on('click', function(event) {
		$(this).removeClass('active');
		toggleLine.removeClass('active-line');
		pageNav.removeClass('active');
	});

	$(window).resize(function() {
		if ($(window).width() > 960) {
			pageNav.removeClass('active');
			toggleLine.removeClass('active-line');
			toggleBlock.removeClass('open')
			overlay.removeClass('active');
		}
	});
	$(function() {
		$(window).scroll(function(){
			if  ($(window).scrollTop() > 10)
				$('header').addClass('page-fixed-header');
			else
				$('header').removeClass('page-fixed-header');
		});
		if  ($(window).scrollTop() > 100){$('header').addClass('page-fixed-header')}			
	});

	links.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top = top - 130;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	$(window).bind('scroll', function() {
		var currentTop = $(window).scrollTop();
		var elems = $('.scrollspy');
		elems.each(function(index){
			var elemTop = $(this).offset().top - 160;
			var elemBottom 	= elemTop + $(this).height() - 160;
			if(currentTop >= elemTop && currentTop <= elemBottom){
				var id = $(this).attr('id');
				var navElem = $('a[href="#' + id+ '"]');
				navElem.addClass('active');
			}
			else{
				var id = $(this).attr('id');
				var navElem = $('a[href="#' + id+ '"]');
				$(function(){
					navElem.removeClass('active');
				})
			}
		})
	}); 

    $('body').append('<i class="btn-up">');

	$('.btn-up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000)
	})

	$(window).scroll(function(){
		if ($(window).scrollTop() > 200){
			$('.btn-up').addClass('active');
		}
		else{
			$('.btn-up').removeClass('active');
		}
	});
	var videoYoutube = $('#youtube').attr('src');
	$('#openVideo').click(function() {
		$('.overlayVideo').addClass('active');
		$('.video-box-popup').addClass('active');
		$('body,html').css('overflow', 'hidden');
		$('#youtube').attr('src', videoYoutube+'?autoplay=1');
	});
	
	$('.overlayVideo, .close').click(function() {
		$('.overlayVideo').removeClass('active');
		$('.video-box-popup').removeClass('active');
		$('body,html').removeAttr('style');
		$('#youtube').removeAttr('autoplay');
		$('#youtube').attr('src', videoYoutube+'?autoplay=0');
	});

	$(function(){
		var window_size = $(window).width();
		var panel = $('.panel');
		var window_offset_top = $(window).scrollTop();
		panel.each(function() {
			var this_panel = $(this)
			var this_panel_offest_top = this_panel.offset().top;
			var window_offset_top = $(window).scrollTop();
			if (window_offset_top >= this_panel_offest_top-550) {
				this_panel.addClass('fade-in')
			}
			$(window).scroll(function(){
				var window_scroll_top = $(window).scrollTop();
				
				if (window_scroll_top > this_panel_offest_top-550){
					this_panel.addClass('fade-in')
				}
			})
		});
	})
});

