function cuotas(){
    let precioTotal = precio * 0.05;
    precio = precio + precioTotal;
    valorCuota = precioTotal / cuota;
    console.log ("El costo total a abonar es " + valorCuota;
}

let precio = parseInt(prompt("Ingrese precio a abonar"));
let cuota = parseInt(prompt("Ingrese cantidad de cuotas"));

cuotas();