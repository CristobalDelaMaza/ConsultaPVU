$(document).ready(function(){
         $("#rut")
  		.rut({formatOn: 'keyup', validateOn: 'keyup'})
  		.on('rutInvalido', function(){
    $(this).parents(".form-group").addClass("has-error")
  })
  .on('rutValido', function(){
    $(this).parents(".form-group").removeClass("has-error")
  });
      });