//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos =[];
let amigosSorteados = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo.trim() == "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(amigo);
    document.querySelector('input').value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        li.styledisplay = "flex";
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Você não adicionou nenhum amigo para sortear.");
        return;
    }
    let indiceAmigos = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAmigos];
    if  (amigosSorteados.includes(amigoSorteado)) {
        return sortearAmigo();
    } else {
        amigosSorteados.push(amigoSorteado);
        document.getElementById('resultado').textContent = `Seu amigo secreto é: ${amigoSorteado}`;
        document.querySelector('#listaAmigos').style.display = 'none';
        return amigoSorteado;
    }
}



