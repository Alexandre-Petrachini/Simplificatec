function ChamadaJSON(data) {
    // conecta ao servidor
    xmlhttp = new XMLHttpRequest();
    var url = "http://menuetec.esy.es/test3.php?data='"+data+"'";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var responseText = xmlhttp.responseText;
            ConectaServidor(responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidor(response) {
        var dados = JSON.parse(response);
        if(dados=="Não há dados!"){
            document.getElementById("cafe1").innerHTML = dados;
            document.getElementById("lanche1").innerHTML = dados;
            document.getElementById("almoco1").innerHTML = dados;
            document.getElementById("lanchen1").innerHTML = dados;
        }else{
        var i;
        var conteudo = "";
        var conteudo2 = "";
        var conteudo3 = "";
        var conteudo4 = "";
        for (i = 0; i < dados.length; i++) //dados.length retorna o tamanho do vetor.
        {
            conteudo += dados[i].tb02_cafe;
            conteudo2 += dados[i].tb02_lanchedia;
            conteudo3 += dados[i].tb02_almoco;
            conteudo4 += dados[i].tb02_lanchenoite;
        }

        document.getElementById("cafe1").innerHTML = conteudo;
        document.getElementById("lanche1").innerHTML = conteudo2;
        document.getElementById("almoco1").innerHTML = conteudo3;
        document.getElementById("lanchen1").innerHTML = conteudo4;
}}}