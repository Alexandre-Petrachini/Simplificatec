function ChamadaJSON(sugestao)
{	
	// conecta ao servidor
	var xmlhttp = new XMLHttpRequest();
 
	/* colocar na url os valores que quer passar para o servidor.
	   seu arquivo PHP deverá capturar os dados usando $_GET[];
	*/var url = "http://menuetec.esy.es/insert_gremio.php?sugestao=" + sugestao; 
 
	xmlhttp.onreadystatechange=function() 
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
			ConectaServidor(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	alert("Gravado com sucesso no servidor");
}
 
function ConectaServidor(response) 
{
    var dados = jQuery.parseJSON(JSON.stringify(response));
}
