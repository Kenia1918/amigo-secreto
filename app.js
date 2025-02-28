// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let nombreAmigo;

//Se crea función para añadir el nombre del amigo 
function agregarAmigo() {
    try {
        element = document.getElementById('amigo');
        const nombreAmigo = element.value;
        if (nombreAmigo === "") {
            alert("Ingresa un nombre válido.");
        } else {
            listaAmigos.push(nombreAmigo);
            // Se limpia caja una vez añadido
            element.value = "";
            listarAmigos();
            return nombreAmigo;
        }
    } catch (error) {
        console.log("Ocurrió un error")
        console.log(error);
    }
}

//Función para listar los nombres de amigos y mostrarlos en pantalla.
function listarAmigos() {
    li = document.getElementById('listaAmigos');
    li.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        li.innerHTML += amigo + "<br />"; 
    }
}

// Se crea función para sortear amigo, verificando primero que la lista no esté vacía.
function sortearAmigo (){
    if (!listaAmigos.length){
        alert ("Tu lista de amigos esta vacía. Agrega amigos para sortear.");
    }else{
        // Se genera un nùmero aleatorio
        let indexAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indexAleatorio];
        ul = document.getElementById('resultado');
        ul.innerHTML = `El amigo sorteado es : ${amigoSorteado}`;
        return amigoSorteado;
    }
}
