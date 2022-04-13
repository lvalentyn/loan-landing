import * as flsFunction from "./modules/functions.js";
import burger from "./modules/burger.js";
import accordion from "./modules/accordion.js";
import modals from "./modules/modals.js";
import forms from "./modules/forms.js";
import smoothScrolling from "./modules/smoothScrolling.js";
import slick from 'slick-carousel';
import $ from "jquery";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// my modules
	smoothScrolling();
	modals();
	forms();
	accordion('.js-faq-btn');
	// burger('.js-burgermenu', '.js-burger-btn');

	// slick
	// setTimeout(function () {
	$(window).on('load resize orientationchange', function () {
		const $carousel = $('.js-advantages-slider');
		if (($(window).innerWidth() >= 568) && ($carousel.hasClass('slick-initialized'))) {
			$carousel.slick('unslick');
		} else if (($(window).innerWidth() < 568) && (!$carousel.hasClass('slick-initialized'))) {
			$carousel.slick({
				lazyLoad: 'ondemand',
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 5000,
				fade: false,
				adaptiveHeight: true,
				swipe: false,
				mobileFirst: true
			});
			$('.slick-dots button').html('');
		}
	});

	// }, 2000);

	// for create webP dublicate
	flsFunction.isWebp();

});


