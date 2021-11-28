/*let nombreUsuario = prompt("Ingrese su nombre");
localStorage.setItem("Usuario", nombreUsuario);
let resultado = localStorage.getItem("usuario");
console.log(resultado);*/

/*
for( let i = 0; i<3; i = i+1){
    let usuario = prompt("Ingrese su nombre");
    localStorage.setItem( i, usuario);
}*/

/*localStorage.setItem("usuarioUno", "Nico");
localStorage.setItem("usuarioDos", "Pepe");
localStorage.setItem("usuariotres", "Jose");

for(let i = 0; i < localStorage.length ; i++){
    let clave = localStorage.key(i);
    console.log( "Clave: " + clave);
    console.log( "Valor: " + localStorage.getItem(clave));
}*/

/*let usuario = {nombre: "Maxi", edad: "22", perro: "Manchas"};
let usuarioJSON = JSON.stringify (usuario); 

console.log( usuario.nombre);

localStorage.setItem( "nuevoUsuario", usuario);
localStorage.setItem( "usuarioJSON", usuarioJSON);

let enJSON = localStorage.getItem( "usuarioJSON");
let resultadoParse = JSON.parse(enJSON);
console.log( resultadoParse.edad);*/

function cargarVotante(){
    let dni = prompt("Ingrese su DNI");
    let voto = prompt("Ingrese su voto");

    localStorage.setItem(dni, voto);
}

function resultado(){

    let votosA = 0;
    let votosB = 0;

    for( let i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);

        if (valor.toLocaleUpperCase() == "A"){
            
            votosA = votosA + 1;
        }

        else if( valor.toLocaleUpperCase() == "B"){
            
            votosB = votosB + 1;
        }

        else {
            alert("Voto Nulo");
        }
    }
    console.log("Votos A: " + votosA);
    console.log("Votos B: " + votosB);

}