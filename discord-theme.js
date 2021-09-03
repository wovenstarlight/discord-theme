$(document).ready( function() {
	$("#darklight").click( function() {
		$("body").toggleClass("dark light");
	});

	$("#servers .more").click( function() {
		$(this).toggleClass("active");
		$("#sidebar").toggleClass("active");
	});

	tippy("#servers a[data-tippy-content]", {
		placement: "right",
		offset: [0, 20],
		theme: "servers"
	});
});