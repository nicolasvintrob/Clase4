function pagosCuota( producto , precio , cuotas){
    this.producto = producto;
    this.precio = precio;
    this.cuotas = cuotas;

    this.datosCompra = function(){
        console.log("El nombre del producto es: " + this.producto);
        console.log("El precio es: $"+ this.precio);
        console.log("Se abonara en: " + this.cuotas + " cuotas");
    }
}



alert("Ingrese los datos del producto para calcular las cuotas");

let producto = prompt("Ingrese el nombre del producto");
let precio = parseInt(prompt("Ingrese el valor del producto"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en la cual quiere abonar su compra"));

let pago = new pagosCuota(producto , precio , cuotas);

pago.datosCompra();