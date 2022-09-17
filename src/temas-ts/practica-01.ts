const AlumnoUtl:{
    nombre:'Joseline',
    edad:21,
    direccion{
        calle:'Malecon',
        pais:'MX',
        estado:'Gto',
    }
}
mostrarDireccion(){
    return this.nombre + ' ,' + this.direcion.estado + ' ,' + this.direccion.pais
}
const direccion=alumnoUtl.mostrarDireccion();console.log(direccion);