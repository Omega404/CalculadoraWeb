import calculadora from './Calculadora'
import traducir from './Traducir'


export default class calcular {

    static operacion (a,b,c){
        

        if(b = "suma"){
            return calculadora.sumar(a,c);
        }
        else if(b = "resta"){
            return calculadora.restar(a,c);
        }
        else if(b = "dividir"){
            return calculadora.dividir(a,c);
        }
        else if(b = "multiplicar"){
            return calculadora.multiplicar(a,c);
        }
        else{
            return "Syntax Error";
        }

    }

}