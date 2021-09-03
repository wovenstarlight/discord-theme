$(document).ready( function() {
	$("#darklight").click( function() {
		$("body").toggleClass("dark light");
	});

	$("#servers .more").click( function() {
		$(this).toggleClass("active");
		$("#sidebar").toggleClass("active");
	});
});