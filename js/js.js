// scroll-menu
new WOW().init();
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

// fixed-header
var h_hght = 0; 
var h_mrg = 0;            
$(function(){
    var elem = $('#menu');
    var top = $(this).scrollTop();
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});

// animate-count
$(document).ready(function(){
	var show = true;
	$(window).on("scroll load resize", function(){
		if(!show) return false;
		var w_top = $(window).scrollTop();
		var e_top = $("#fun").offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $("#fun").outerHeight();

		console.log(w_top + " " + e_top);

		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 1800
			});
			show = false;
		}
	});
});
