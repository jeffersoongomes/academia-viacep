// Função que busca o CEP na API do ViaCEP
const getBuscarCepAPI = async function(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let response = await fetch(url);
    let item = await response.json();
    setDadosForm(item);
}

// Função para preencher os dados no formulário, após a busca do CEP
const setDadosForm = function(dadosCep) {
    document.getElementById('logradouro').value = dadosCep.logradouro;
    document.getElementById('bairro').value = dadosCep.bairro;
    document.getElementById('cidade').value = dadosCep.localidade;
    document.getElementById('estado').value = dadosCep.uf;
}

// Evento de clique no botão "Consultar"
document.getElementById('btnConsultar').addEventListener('click', function() {
    let cep = document.getElementById('cep').value;
    getBuscarCepAPI(cep);
});