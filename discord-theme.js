$(document).ready( function() {
	$("#darklight").click( function() {
		$("body").toggleClass("dark light");
	});

	$("#servers .more").click( function() {
		$(this).toggleClass("active");
		$("#sidebar").toggleClass("active");
	});

	$("#tmblr-controls-toggle").click(function(){
		$("body").toggleClass("controls-click");
	});

	tippy("#servers a[data-tippy-content]", {
		placement: "right",
		offset: [0, 20],
		theme: "servers"
	});

	tippy("header .icons [data-tippy-content]", {
		placement: "bottom",
		theme: "servers navbar"
	})
});