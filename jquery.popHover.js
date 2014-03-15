(function($){
// local globals go here - referenced via closure

  $.fn.turnGreen =function(options){
    options = $.extend({}, $.fn.myPlugin.config, options);
    return this.each(function(){
		
      $(this).css('color', 'green');
		 	
    });
	};

  $.fn.myPlugin.config ={
    // set values and custom functions
    opa: 0.5
    , size: 1.2
  };
}(jQuery));
