$(document).ready(function(){
    $("#act2cal").click(function(){
        var act2p1 = $("input[name='act2p1']:checked").val();
        var act2p2 = $("input[name='act2p2']:checked").val();
        var act2p3 = $("input[name='act2p3']:checked").val();

        var calificacion = 0;

        $("#act2caldesc").html('<strong>Los resultados son los siguientes:</strong><br><br>');

        if (act2p1 == 'a') {
        	calificacion += 1;
        	$("#act2caldesc").append('1. <img src="img/yes.png" style="width:20px;" /><br>');
        } else {
        	$("#act2caldesc").append('1. <img src="img/no.png" style="width:20px;" /><br>');
        }

        if (act2p2 == 'c') {
        	calificacion += 1;
            $("#act2caldesc").append('2. <img src="img/yes.png" style="width:20px;" /><br>');
        } else {
            $("#act2caldesc").append('2. <img src="img/no.png" style="width:20px;" /><br>');
        }

        if (act2p3 == 'a') {
        	calificacion += 1;
            $("#act2caldesc").append('3. <img src="img/yes.png" style="width:20px;" /><br><br>');
        } else {
            $("#act2caldesc").append('3. <img src="img/no.png" style="width:20px;" /><br><br>');
        }


        $("#act2caldesc").append('Tu calificacion es de <strong>' + calificacion + '/3 </strong>' + '<br><img src="img/' + calificacion + 'a2.png" style="width:200px;" />');


    });
});