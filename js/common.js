head.ready(function() {

	$('.dropdown').on("click", function(event){
		event.preventDefault();
		$(this).find('.dropdown__text').toggleClass('is-active');
		$(this).find('.is-hidden').toggleClass('is-visible');
	});

	$('.select__option').on("click", function(event){
		$('.select__option').removeClass('is-active');
		$(this).addClass('is-active');
	});

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

});