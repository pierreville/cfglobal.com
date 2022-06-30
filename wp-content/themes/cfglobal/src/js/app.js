/**
 * GLOBAL REQS
 * Include the required libs from the window (see package.json for more)
 */
import $ from 'jquery';
/**
 * MODULE REQS
 */
//es6 style
import emitter from './modules/emitter.js';
import utils from './modules/utils.js';
import sliders from './modules/sliders.js';

$('body').addClass('js-loading');

/**
 * MAIN DOM READY EVENT
 */
jQuery(document).ready(function($) {
    /**
     * INIT MODULES
     * Calls the basic setup/init functions on each module.
     * How are we going to structure this?
     */

    emitter.emit('dom:loaded');

    $('body').addClass(utils.isTouch() ? 'is-touch' : 'no-touch');
	sliders.init();

	// Lets not start any animations until the DOM is ready
	$('body').removeClass('js-loading');

	$('.js-hamburger-toggle').on('click', function() {
		if ($('.js-mobile-menu').hasClass('isActive') ) {
			$('.js-mobile-menu-overlay').removeClass('isActive');
			$('.js-mobile-menu').removeClass('isActive');
		} else {
			$('.js-mobile-menu-overlay').addClass('isActive');
			$('.js-mobile-menu').addClass('isActive');
		}
	});

	$('.js-mobile-menu-overlay').on('click', function(){
		$('.js-mobile-menu-overlay').removeClass('isActive');
		$('.js-mobile-menu').removeClass('isActive');
	});

	$('.js-has-children').hover(function() {
		$('.js-fake-nav').addClass('isActive');
	}, function() {
		$('.js-fake-nav').removeClass('isActive');
	});

	/*
	* Accordions
	*/
	$('.js-accordion-title').on('click', function() {
		let $this = $(this);
		let accordion = $(this).parent('.accordion');

		if ( accordion.hasClass('isActive') ) {
			accordion.removeClass('isActive');
		} else {
			$('.accordion').removeClass('isActive');
			accordion.addClass('isActive');
		}

	});


	if ( window.location.hash ) {

		let target = window.location.hash;
		$('body, html').animate({
			scrollTop: $(target).offset().top
		}, 200);
		event.preventDefault();
	}

	$('.js-plus').on('click', function() {
		let desc = $(this).attr('data-desc');
		let row = $(this).attr('data-row');
		if ( $(this).hasClass('isActive') ) {
			$(this).removeClass('isActive');
			$('.js-member-desc-' + row).removeClass('isActive');
			$('.js-member-desc-' + row).html('');
			$(this).siblings('.js-member-desc__mob').removeClass('isActive');
		} else {
			$('.js-plus[data-row=' + row +']').removeClass('isActive');
			$('.js-plus[data-row=' + row +']').siblings('.js-member-desc__mob').removeClass('isActive');
			$(this).addClass('isActive');
			$('.js-member-desc-' + row).addClass('isActive');
			$('.js-member-desc-' + row).html(desc);
			$(this).siblings('.js-member-desc__mob').addClass('isActive');
		}
	});

});
