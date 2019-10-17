//Created simple plugin to detect touchstart
;(function($){
    $.fn.extend({  touch: function(func) {  return this.each(function() { 	this.addEventListener("touchstart",func)   });  }   });
})(jQuery);

$(function(){
    let objMenuHead = jQuery(".menu-head");
    let objLogo = jQuery("#logo");

    objMenuHead.mouseover(function(){
        jQuery("#sub-menu" + objMenuHead.index(this).toString()).addClass("show");
    });

    objMenuHead.mouseleave(function(){
        jQuery("#sub-menu" + objMenuHead.index(this).toString()).removeClass("show");
    });

    objLogo.mousedown(function() {

    })
});