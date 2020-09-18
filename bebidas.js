class Bebida {
    constructor(cantidadml) {
        this.cantidadml = `${cantidadml}ml`;
    }
}
class Refresco extends Bebida {
    constructor(cantidadml, gAzucar) {
        super(cantidadml);
        this.gAzucar = `${gAzucar}g de azucar.`;
    }
}
class Cerveza extends Bebida {
    constructor(cantidadml, porcentajeAlc) {
        super(cantidadml);
        this.porcentajeAlc = `${porcentajeAlc}% de alcohol.`;
    }
}

console.log("-------------------------------------------")
const sangria = new Refresco(600, 33)
console.log(sangria)
console.log(sangria.cantidadml)
console.log(sangria.gAzucar)

const pacifico = new Cerveza(600, 4.0)
console.log(pacifico)
console.log(pacifico.cantidadml)
console.log(pacifico.porcentajeAlc)
/*
    2.- Crear una clase Bebida que herede a dos clases Cerveza
    y Refresco. Ambas clases deben tener la propiedad
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
*/