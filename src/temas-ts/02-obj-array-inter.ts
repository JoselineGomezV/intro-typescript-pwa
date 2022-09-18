let nombre1: string[]= ['Melisa','Marco','Charlie']

console.log(nombre1);

let datos:(boolean | number | string)[]=['Melisa', 23, true, 'Ramirez']

console.log(datos);
datos.push(200);
datos.push('Joseline');
datos.push(false);
console.log(datos);

//Manera distinta de crear arreglos
let arreglo: Array<number> = [1,2,3,4]

interface Alumno{
    matricula: string;
    nombre1:string;
    edad:number;
    email:string;
    materias?:string[]
}

const alumno: Alumno = {
    matricula: '123456',
    nombre1: 'Melisa',
    edad: 23,
    email: 'meli69@hotmail.com',
    materias: ['Inglés', 'Programación']
}

alumno.nombre1='Felipe';
console.log(alumno)