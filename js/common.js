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

	//progress bar on bundles
	function progress () {
		
		var pushButton = $('.offer__btn'),
				   bar = $('.offer__for');

		$(pushButton).click(function(){
			bar.removeClass('is-active');
			$(this).closest('.offer').find(bar).addClass('is-active');
		});		
	}

	progress();

	//info tooltip on hover
	function tiptool (){

		var tooltip = $('.js-tip').children('.tooltip'),
			icon   = $('.js-tip').children('.js-hover');

		icon.mouseover(function() {
			$(this).closest('.js-tip').find(tooltip).removeClass('is-hidden');
		});

		icon.mouseleave(function() {
			$(this).closest('.js-tip').find(tooltip).addClass('is-hidden');
		});	

	}

	tiptool();

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

});