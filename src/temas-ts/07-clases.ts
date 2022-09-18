//CLASES


//MODIFICADORES DE ACCESO

class Persona{//PUBLIC - PRIVATE
    private nombre: string;
    private edad: number;

    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b;
    }
setNombre(a:string){
    this.nombre=a;
}
    private imprimePersona(){
        console.log(`Nombre: ${this.nombre} \n Edad: ${this.edad}`)
    }
    metodoAlterno(){
        this.imprimePersona();
    }
}

let persona1: Persona;
persona1 = new Persona('Dana', 20);
let persona2= new Persona('Laura', 19);
//persona1.nombre ='Joseline';
//persona1.edad=21;
persona1.setNombre('Joseline');
persona1.metodoAlterno();
//persona1.imprimePersona();
//persona2.imprimePersona();


class Dado{
    private valor:number;
    public tirar(){
        this.generar();

    }
    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();