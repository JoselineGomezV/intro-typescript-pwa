interface AlumnoUTL{
    nombre:string;
    edad: number;
    direccion: Domicilio;
}

interface Domicilio{
    calle: string;
    pais: string;
    estado: string;
}

const alumnoUtl: AlumnoUTL ={
    nombre:'Joseline',
    edad:21,
    direccion:{
        calle:'Malecon',
        pais:'MX',
        estado:'Gto',
    }
}

const{nombre, edad, direccion} = alumnoUtl;
const{calle, pais, estado} = direccion;
console.log(`Alumno: ${nombre}, \n Edad: ${edad}, \n Domicilio: ${calle}, ${estado}, ${pais}`)