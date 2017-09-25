$(document).ready(function () {

  $("#consultar").click(function(e){
    e.preventDefault();
    
    function token(rut) { //metodo para formatear el rut en token
		rut = rut.split('-').join('').split('.').join('');
		rut = rut.substr(0,[rut.length - 1] );
		return rut;
    }

    var token = token($("#rut").val());
    
    $.ajax({
            url: "http://200.13.0.53/MOySE/SurveyReports/laravel/public/api/live/estado-token/pvu/"+token, //metodo API
        	data: [],
        	dataType: "json",
        	type: "GET",                
        	cache: false,
        	success: function (data) {
        		if( data.finishied == -1){
        			alert("La encuesta no ha sido guardada");
        		}else{
        			alert("la encuesta se guardó correctamente");
        		}
        	},
       		error: function (data, status) {
            	alert(status);
        	}
    	});

  });

 
});