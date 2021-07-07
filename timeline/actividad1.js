$(document).ready(function(){
    $("#act1cal").click(function(){
        var act1p1 = $("input[name='act1p1']:checked").val();
        var act1p2 = $("input[name='act1p2']:checked").val();
        var act1p3 = $("input[name='act1p3']:checked").val();
        var act1p4 = $("input[name='act1p4']:checked").val();
        var act1p5 = $("input[name='act1p5']:checked").val();

        var calificacion = 0;

        if (act1p1 == 'c') {
        	calificacion += 1;
        	$("#act1resp1").html('<img src="img/yes.png" style="width:35px;" />');
        	$("#act1resp1").css('display','inline');
        } else {
        	$("#act1resp1").html('<img src="img/no.png" style="width:35px;" />');
        	$("#act1resp1").css('display','inline');
        }

        if (act1p2 == 'l') {
        	calificacion += 1;
        	$("#act1resp2").html('<img src="img/yes.png" style="width:35px;" />');
        	$("#act1resp2").css('display','inline');
        } else {
        	$("#act1resp2").html('<img src="img/no.png" style="width:35px;" />');
        	$("#act1resp2").css('display','inline');
        }

        if (act1p3 == 'c') {
        	calificacion += 1;
        	$("#act1resp3").html('<img src="img/yes.png" style="width:35px;" />');
        	$("#act1resp3").css('display','inline');
        } else {
        	$("#act1resp3").html('<img src="img/no.png" style="width:35px;" />');
        	$("#act1resp3").css('display','inline');
        }

        if (act1p4 == 'l') {
        	calificacion += 1;
        	$("#act1resp4").html('<img src="img/yes.png" style="width:35px;" />');
        	$("#act1resp4").css('display','inline');
        } else {
        	$("#act1resp4").html('<img src="img/no.png" style="width:35px;" />');
        	$("#act1resp4").css('display','inline');
        }

        if (act1p5 == 'l') {
        	calificacion += 1;
        	$("#act1resp5").html('<img src="img/yes.png" style="width:35px;" />');
        	$("#act1resp5").css('display','inline');
        } else {
        	$("#act1resp5").html('<img src="img/no.png" style="width:35px;" />');
        	$("#act1resp5").css('display','inline');
        }

        $("#act1caldesc").html('Tu calificacion es de <strong>' + calificacion + '/5 </strong>' + '<br><img src="img/' + calificacion + '.png" style="width:200px;" />');


    });
});