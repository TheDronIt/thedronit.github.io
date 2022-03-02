const AnimItems = document.querySelectorAll('.anim');


$(window).on('load', function () {
	$preloader = $('.loaderArea'),
	$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});
	


if (AnimItems.length > 0) {
	window.addEventListener('scroll', AnimOnScroll);
	function AnimOnScroll(params) {
		for (let index = 0; index < AnimItems.length; index++) {
			const AnimItem = AnimItems[index];
			const AnimItemHeight = AnimItem.offsetHeight;
			const AnimItemOffset = offset(AnimItem).top;
			const AnimStart = 4;

			let AnimItemPoint = window.innerHeight - AnimItemHeight / AnimStart;
			if (AnimItemHeight > window.innerHeight) {
				AnimItemPoint = window.innerHeight - window.innerHeight / AnimStart;
			}

			if ((pageYOffset > AnimItemOffset - AnimItemPoint) && pageYOffset < (AnimItemOffset + AnimItemHeight)) {
				AnimItem.classList.add('anim__active');
			}
			else {
				if (!AnimItem.classList.contains('anim-no-hide')){
					AnimItem.classList.remove('anim__active');
				}	
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;		
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}
	setTimeout(() => {
		AnimOnScroll();
	}, 800);
}
