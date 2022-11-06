const form = document.getElementById("form-atividade");
const contatos = [];
const telefones = [];
const telefone = document.getElementById("tel-contato");

telefone.addEventListener('keypress', () => {
    let telefonelength = telefone.value.length

    if(telefonelength === 0 ) {
        telefone.value += '('
    }else if (telefonelength === 3 ) {
        telefone.value += ') '
    }else if (telefonelength === 6){
        telefone.value += ' '
    }else if (telefonelength === 11){
        telefone.value += '-'
    }
})

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaListaContatos();
});

function adicionaLinha() {

    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelefoneContato = document.getElementById("tel-contato");

    if (telefones.includes(inputTelefoneContato.value)) {
        alert(`O telefone ${inputNomeContato.value} já foi inserido`)
    } else if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi inserido`)
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(parseFloat(inputTelefoneContato.value));
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }


    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaListaContatos() {
    const mediaFinal = contaContatos();

    document.getElementById("media-final-valor").innerHTML = mediaFinal;

}

function contaContatos() {
    const contatosCont = contatos.length

    return contatosCont
}