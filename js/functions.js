let isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = true
}
$(document).ready(function () {

	if ($(window).width() < 768 && isMobile) {
		$('iframe').attr('height', '400')
		$('.header__contacts').appendTo($('.header__menu'))
		$('.header__buttons-wrapper').appendTo($('.header__menu'));
	}
	else if ($(window).width() < 752 && !isMobile) {
		$('iframe').attr('height', '400');
		$('.header__contacts').appendTo($('.header__menu'));
		$('.header__buttons-wrapper').appendTo($('.header__menu'));
	}
	else if ($(window).width() <= 470) {
		$('iframe').attr('height', '300');
	}

	$('.whatwedo-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_blue" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_blue" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
		responsive: [{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
					autoplaySpeed: 1500,
				}
			}

		],
	});
	$('.consumers-slider').slick({
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}
			}
		],
	});
	$(function () {
		$('#bgndVideo').YTPlayer({
			showControls: 0,
		});
	});
	$('.manufacture-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
		arrows: false,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
	});
	$('.blog-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
	});
	$('.process-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
	});
	$('.types-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		],
	});

	$('.manufacture-pics').slick({
		slidesToShow: 4,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		infinite: true,
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});

	$('.video-card').matchHeight();
	$('.whatwedo-slide').matchHeight({
		byRow: false
	});
	$('.tz-not-card').matchHeight();
	$('.whatwedo-slider__text').matchHeight();

	function toggleBurger() {
		$('.header__menu,.burger-button').toggleClass('active');
		$('html,body').toggleClass('body-hidden');
	};

	$('.burger-button').on("click", () => {
		toggleBurger()
	});

	$(document).on('change', '#form-files', function () {
		const files = $('#form-files').prop('files');
		const names = $.map(files, function (value) {
			$('.modal__uploaded-list').append('<p class="uploaded-file"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15L11 17L15 13M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="#4b8ab2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' + value.name + '</p>');
		});
	});

	function scrollTo(dest) {
		if ($('.header__menu').hasClass('active') && $('.burger-button').hasClass('active')) {
			toggleBurger()
		}
		$('html, body').animate({
			scrollTop: dest.offset().top
		}, 1000);
	}
	$('a[href="#contacts"]').click(() => scrollTo($('.contacts')));
	$('a[href="#about"]').click(() => scrollTo($('.manufacture')));

});