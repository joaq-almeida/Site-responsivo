$(function(){

	$('#btnguardar').click(function(){
		var datos=$('#frmajax').serialize();
		$.ajax({
			type:"POST",
			url:"insertar.php",
			data:datos,
			success:function(r){
				if(r==1){
					alert("agregado con exito");
				}else{
					alert("Fallo el server");
				}
			}
		});

		return false;
	});
});