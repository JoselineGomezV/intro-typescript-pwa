
import { calcularIva2, Producto} from "../temas-ts/05-desestucturar-funciones";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:7866,
    },
    {
        desc:'Tablet1',
        precio:8585,
    },
    {
        desc:'Telefono2',
        precio:7878,
    },
];

const [total1, iva1] = calcularIva2(tiendaProductos);
console.log(`Total: ${total1} \n IVA: ${iva1}`);