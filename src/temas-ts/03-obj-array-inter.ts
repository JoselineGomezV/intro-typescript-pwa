function sumar(a: number,b: number, c: number = 0): void{
    
    console.log(a+b+c)
    }
    
    console.log(sumar(2,3,11))
    
    
    
    interface Alumno {
        nombre: string,
        edad: number,
        muestraEdad: () => void
    }
    
    export function cursar(alumno:Alumno, nuevaEdad:number):void {
        alumno.edad+= nuevaEdad
        console.log(alumno)
    }
    
    const nuevoAlumno:Alumno={
        nombre:'Joseline',
        edad:21,
        muestraEdad(){
            console.log('Edad de alumno: ',this.edad)
        }
    }







    