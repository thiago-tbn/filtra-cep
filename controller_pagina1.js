$(document).ready(function(){
	$("#id-cep").mask("00000-000");	
	$('[data-toggle="tooltip"]').tooltip(); 
});

$("#btn-buscar-cep").click(function(){
	var cep = $("#id-cep").val().replace(/[^0-9]/g,'');	
	if(cep.length == 8){ 
		 buscaEndereco(cep);
	}else{
		toastr.error("O Cep informado está incompleto!");
	}
});
 
function buscaEndereco(cep){ 
	$.ajax({
		url: "https://viacep.com.br/ws/"+cep+"/json/",
		type: "GET",
		dataType: "JSON",
		success: function(json){
			if(json.erro){
				toastr.error("CEP inválido ou inexistente!");			
			}else{
				var obj = {
					cep: json.cep,
					logradouro: json.logradouro,
					bairro: json.bairro,
					uf: json.uf
				};
				localStorage.setItem("dadosCep", JSON.stringify(obj));
				$(location).attr('href', '/pagina2.html');
			}
		},
		error: function(e){
			console.erro(e.responseText);
			toastr.error("Erro ao buscar CEP!");
		}
	});
}
