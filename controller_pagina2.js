var obj = "";
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	if(JSON.parse(localStorage.getItem("dadosCep"))){
		obj = JSON.parse(localStorage.getItem("dadosCep"));
		$("#logradouro").val(obj.logradouro);
		$("#bairro").val(obj.bairro);
		$("#uf").val(obj.uf); 
		$("#cep").val(obj.cep); 
	} 
}); 

$("#voltar-pagina1").click(function(){
	localStorage.removeItem("dadosCep");
	$("#cep").val("");
	$("#logradouro").val("");
	$("#bairro").val("");
	$("#uf").val("");
	obj = ""; 
	$(location).attr('href', '/pagina1.html');
});