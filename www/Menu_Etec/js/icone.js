$(document).ready(function() {
    $("#btnconsulta").click(function() {
        $("#coffee").show("fast");
        $("#snack").show("fast");
        $("#lunch").show("fast");
        $("#snack2").show("fast");
		$("#cafe1").slideDown(200);
		$("#lanche1").slideDown(200);
		$("#almoco1").slideDown(200);
		$("#lanchen1").slideDown(200);
    });
	$("#cafe").click(function() {
        $("#coffee").toggle("fast");
		$("#cafe1").slideToggle(200);
    });
	$("#lanche").click(function() {
        $("#snack").toggle("fast");
		$("#lanche1").slideToggle(200);
    });
	$("#almoco").click(function() {
        $("#lunch").toggle("fast");
		$("#almoco1").slideToggle(200);
    });
	$("#lanchen").click(function() {
        $("#snack2").toggle("fast");
		$("#lanchen1").slideToggle(200);
    });
});