class Direccion {

    constructor(calle, numeroExt, numeroInt, colonia, codigoPost, ciudad, municipio ) {

        this.calle = calle;
        this.numeroExt = numeroExt;
        this.numeroInt = numeroInt;
        this.colonia = colonia;
        this.codigoPost = codigoPost;
        this.ciudad = ciudad;
        this.municipio = municipio;


    }
    getFormatoCorto(){
     return (`${this.calle} ${this.numeroExt}`)
    }
    getFormatoExtendido(){
     return (`Calle:${this.calle}, Número exterior:${this.numeroExt}, Número interior:${this.numeroInt}, Colonia:${this.colonia}, Codigo postal:${this.codigoPost}, Ciudad:${this.ciudad}, Municipio:${this.municipio}`)

    }
}
 let direccion1 = new Direccion ("Av. Morelos", 13)
 console.log(direccion1.getFormatoCorto());