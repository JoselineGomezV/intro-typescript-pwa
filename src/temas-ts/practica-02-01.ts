export class PracticaSuma{
    private a: number;
    private b: number;
    private suma: number;

    setNumeros(base:number, multiplicado:number){
        this.a = base;
        this.b = multiplicado;
    }

    private calcular():number{
        let suma = 0
        for(
            let sumando = 1; sumando <= this.b; sumando++
        ){
            suma += this.a
        }
        return suma
    }
    
    getValor(): void{
        console.log(this.calcular());
    }
}
