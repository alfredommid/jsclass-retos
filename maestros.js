var califFis = [85,78,56,79,89,93,68,62,74,95,65,90,82,77,69];
var califMus = [100,98,89,95,88,89,93,83,91,94,87,85,90,96,97];

class Maestro{
    constructor(nombre){
        this.nombre = nombre;
    }
}
class MFisica extends Maestro{
    constructor(nombre, antiguedad){
        super(nombre);
        this.materia = "Física";
        this.antiguedad = antiguedad;
    }
    promedio(){
        var suma = 0;
        for(var i = 0; i < califFis.length; i++) {
        suma += califFis[i];
        }
        return suma / califFis.length;
        }
}
class MMusica extends Maestro{
    constructor(nombre, edad){
        super(nombre);
        this.materia = "Música";
        this.edad = edad;
    }
    promedio(){
        var suma = 0;
        for(var i = 0; i < califMus.length; i++) {
        suma += califMus[i];
        }
        return suma / califMus.length;
        }
}

const f_001 = new MFisica("Saúl Ramírez", 12);
console.log(f_001);
console.log(f_001.antiguedad)
console.log(f_001.materia)
console.log(f_001.promedio())

console.log("-------------------------------------------")

const edf_001 = new MMusica("Cristobal Sánchez", 42);
console.log(edf_001);
console.log(edf_001.edad)
console.log(edf_001.materia)
console.log(edf_001.promedio())

/*
    3.- Hacer superclase Maestro y subclases Maestro de Física y 
    Maestro de Música y a cada uno asignarle su materia y 
    calcular su promedio de grupo a partir de calificaciones  
    (puedes usar arreglos). El maestro de física tiene un 
    atributo “antigüedad” que guarda un valor numérico, 
    mientras que el maestro de música tiene un atributo “edad”
    también guardando un valor numérico.
*/