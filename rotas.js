//Carrega o módulo HTTP e URL
var http = require ('http');
var url = require('url');

//Função de CallBack para o servidor HTTP
var callback = function (request, response) {
    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type" : "text/plain; charset=utf-8"});

    //Faz o parse da URL separando o caminho (rota)
    var parts = url.parse(request.url);

    //Verifica rota
    if (parts.path == "/"){
        response.end("Site Principal");
    } else if (parts.path == "/rota1"){
        response.end("Site da Rota 1");
    } else if (parts.path == "/rota2"){
        response.end("Site da Rota 2");
    }  else if (parts.path == "/rota3"){
        response.end("Site da Rota 3");
    } else {
        response.end("Rota Invalida: " + parts.path);
    }
};

//Cria um Servidor HTTP que responde para todas as requisições
var server = http.createServer(callback);

//Porta que o servidor vai escutar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");