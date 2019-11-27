$(document).ready(function(){
	console.log("Yep, my function is being called");
	var msg = "Hover over an image below.";
    $(".preview").hover(function(){
		$("#image").css('backgroundImage', 'url('+ this.src + ')');
		$("#image").html(this.alt);
	}, function(){
		$("#image").css('backgroundImage', 'url()');
		$("#image").html(msg);
	})
	$(".preview").focus(function(){
		$("#image").css('backgroundImage', 'url(' + this.src + ')');
		$("#image").html(this.alt);
	})
	$(".preview").blur(function(){
		$("#image").css('backgroundImage', 'url()');
		$("#image").html(msg);
	})
});
		

