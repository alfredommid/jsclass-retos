class Electrodomestico{
    constructor(precio, color, capacidadMax){
        this.precio = precio;
        this.color = color;
        this.capacidadMax = capacidadMax;
        this.consumoEnergetico = 100;
    }
}
class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidadMax, carga){
        super(precio, color, capacidadMax);
        this.carga = carga;
    }
    precioFinal(){
        return this.consumoEnergetico * this.carga;
    }
}

const f5908 = new Lavadora(7499, "Negro", 140, 14);
console.log(f5908.precioFinal());

/*
    1.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
    Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
*/