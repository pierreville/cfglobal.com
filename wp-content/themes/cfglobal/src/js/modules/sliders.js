function slider() {

	const locationWindowsSlider = $('.js-location-windows-slider').slick({
		arrows: false,
		autoplay: true,
		speed: 3000,
	   autoplaySpeed: 0,
	   cssEase: 'linear',
	});

}

function init() {
	slider();
}

module.exports = {
	init
};
