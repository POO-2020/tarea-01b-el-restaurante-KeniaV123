class Precio{
   
    constructor(valor){
        this.valor= valor;
    }
    getPrecio(){
        return ("$" + new Intl.NumberFormat("en-US").format(this.valor));
    }
}

var precio1= new Precio(1000000000000);
console.log(precio1.getPrecio());   