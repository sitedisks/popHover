// JavaScript Document
(function($, window, document, undefind){
	// local global go here - referenced via closure
	var oSize;
	var oColor;
	var imgWidth;
	$.fn.popHover = function(options) {
		options = $.extend({}, $.fn.config, options);
		return this.each(function() {
			$(this).mouseover(function() {
				oSize = parseInt($(this).css("font-size"));
				oColor = $(this).css("color");
				imgWidth = $(this).outerWidth();
				var settings = {opacity:options.opa,fontSize:oSize*options.size,color:options.color};
				if($(this).prop("tagName")=="IMG")
					settings.width = imgWidth * options.size;
				$(this).stop().animate(settings, options.enlSpeed, function() {
					$(this).animate({opacity: 1}, options.backSpeed);
				});
			});
			$(this).mouseout(function() {
				var settings = {opacity:1,fontSize:oSize,color:oColor};
				if($(this).prop("tagName")=="IMG")
					settings.width = imgWidth;
				$(this).stop().animate(settings, options.outSpeed);
			});
		});
	};

	$.fn.config ={
		// set values and custom functions
		opa: 0.5
		, size: 1.2
		, enlSpeed: 400
		, backSpeed: 400
		, outSpeed: 400
		, color: '#3AA6FF' 
	};
}(jQuery, window, document));

