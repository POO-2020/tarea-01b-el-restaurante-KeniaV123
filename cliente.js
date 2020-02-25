import Direccion from ".//direccion.js";

export default class Cliente {


    /**
 * @param {string} nombre
 * @param {Direccion} direccion
 * @param {number} telefono 
 */

    constructor(nombre, direccion, telefono ){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono; 

    }
    getPerfil(){
        return (`Nombre del cliente:${this.nombre}, dirección:${this.direccion.getFormatoCorto()}, telefono:${this.telefono}`)    
    };
}
let cliente1 = new Cliente ("Karla Sierra", "Av.Hidalgo #8", 33568765);
console.log(cliente1.getPerfil());