
let boton = document.getElementById("boton");

window.addEventListener("keydown" , function(e){
    
    if(e.key == "enter"){
        let item = document.getElementById("nombreItem");
        let precio = document.getElementById("precioProducto");
        let cuotas = document.getElementById("cantidadCuotas");
        let precioTotal = (precio/cuotas);
    
        let parrafo = document.createElement("p");
        parrafo.innerHTML = ("El precio de la cuota por: " + item + "Es de: " + cuotas);
        mensaje.appendChild(parrafo);
    
        console.log(precio.value);
        console.log(cuotas.value);
        console.log(precioTotal.value);
        console.log(item.value);
    }
};

alert ("Ingrese los datos del producto para calcular las cuotas");
