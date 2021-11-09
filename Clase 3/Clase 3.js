/*for( let i = 0 ; i < 5 ; i = i + 1 ){

    let edad = prompt('Ingrese su edad');
    console.log (parseInt (edad) + 1)
 
}*/

let usuario = prompt('Ingrese su nombre de usuario');
while(usuario != 'ESC'){
    console.log ("Hola " + usuario);
    usuario = prompt("Ingrese su nombre de usuario o ESC para salir");
}