head.ready(function() {

	$('.dropdown').on("click", function(event){
		event.preventDefault();
		$(this).find('.dropdown__text').toggleClass('is-active');
		$(this).find('.is-hidden').toggleClass('is-visible');
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