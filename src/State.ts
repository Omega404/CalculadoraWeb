import traducir from './Traducir';
import calculadora from './Calculadora';


export class State {

    static Num1;
    static Num2;
    static err = "Syntax Error";

    static RealizarOp(a: string,b:string,c:string){

        this.Num1 = a.replace(/\s/g, "");
        let Oper = b.replace(/\s/g, "");
        this.Num2 = c.replace(/\s/g, "");

        if( Oper == "suma"){
                
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.sumar(this.Num1,this.Num2);
            
        }
        else if( Oper == "resta"){
            
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.restar(this.Num1,this.Num2);
            
        }
        else if( Oper == "multiplicar"){
        
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.multiplicar(this.Num1,this.Num2);
            
        }
        else if( Oper == "dividir"){

            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.dividir(this.Num1,this.Num2);
            
        }
        else{
            return this.err;
        }
    }

    static Realizar (a,b,c){
        this.Num1 = a;
        let Oper = b.replace(/\s/g, "");
        this.Num2 = c.replace(/\s/g, "");

        if(Oper == "suma"){
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.sumar(this.Num1,this.Num2);
        }
        else if(Oper == "resta"){
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.restar(this.Num1,this.Num2);
        }
        else if(Oper == "multiplicar"){
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.multiplicar(this.Num1,this.Num2);
        }
        else if(Oper == "dividir"){
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.dividir(this.Num1,this.Num2);
        }
        else{
            return this.err;
        }
    }

}

export default State;