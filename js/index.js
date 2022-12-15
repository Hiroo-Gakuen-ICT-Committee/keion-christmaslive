$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	$('body,html').animate({scrollTop: pos}, 700); 
    	return false;
});