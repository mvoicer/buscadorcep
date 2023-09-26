// viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

let rua = document.querySelector('#Logradouro');
let cidade = document.querySelector('#Cidade');
let uf = document.querySelector('#UF');
let btnCep = document.querySelector('#btnBuscarCep');
let listaCep = document.querySelector('#listaCep');

rua.value = 'Domingos Jose';
cidade.value = 'Porto Alegre';
uf.value = 'RS';

btnCep.addEventListener('click', function(e) {
    e.preventDefault();
    
    let urlBase = 'https://viacep.com.br/ws/';
    let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/json/';
    let callback = '?callback=popularNaoSeiMeuCep';

    let script = document.createElement('script');
    script.src = urlBase + parametros + callback;
    document.body.appendChild(script);
    
});

function popularNaoSeiMeuCep(resposta) {
    if (!Array.isArray(resposta)) {
        alert('Nenhum CEP encontrado');
        return;
    }

    resposta.forEach(function(i) {
        let li = document.createElement('li');
        let endereco = i.logradouro + ', ' + i.bairro + ', ' + i.localidade + ' - ' + i.uf + ' - ' + i.cep;
        li.innerHTML = endereco;
        li.setAttribute('onclick', 'exibirCep('+parseInt(i.cep.replace('-',''))+')')
        listaCep.appendChild(li);
    });
}

function exibirCep(cep) {
    alert(cep);
}