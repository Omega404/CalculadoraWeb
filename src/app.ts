import State from './State'



//Servidor y complementos

console.log('Server on port 5000');

 const es6Renderer = require('express-es6-template-engine');
var express = require('express');
var app = express();
var server = app.listen(5000);

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html'); 
app.set('view engine','ejs');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Datos de comandos ingresados

var calcular = { 
    result: 0,
    str: "",
}


//Get / Recibir pagina

app.get('/',function(req,res){

    res.render('result',{comandos: calcular});
});

app.get('/comandos',function(req,res){

    res.render('result',{comandos: calcular});
});

//Post / Mandar Datos Ingresados

app.post('/',urlencodedParser, total);



// Funcion

function total(req,res){


    if(req.body.cmd == ""){
        alert("Ingrese un comando Correcto");
    }
    else if(calcular["1"] == "Syntax Error"){
        calcular["1"] = null;
        alert("Se debe de ingresar numero, operador, numero");
    }
    
    else{

        //Almacenar Datos   // Enviar Datos // Calcular Datos 

        if(calcular["1"] == null){
            calcular["1"] = req.body.cmd;

            calcular["str"] = calcular["1"];
            res.render('result', {comandos: calcular});
           
        }

        else if(calcular["2"] == null){
            calcular["2"] = req.body.cmd;

            calcular["str"] = calcular["str"] + " " +  calcular["2"];

            res.render('result', {comandos: calcular});

        }
        else{

            // Arreglar para calcular sin el 3er comando

            //Mandar a calculadora
            calcular["3"] = req.body.cmd;


            //str va a recibir el resultado de calculadora
            
            calcular["1"]= State.RealizarOp(calcular["1"],calcular["2"],calcular["3"]);
            calcular["str"] = null;

            calcular["result"] = calcular["1"];

            // Borrar datos
            calcular["1"] = null;
            calcular["2"] = null;
            calcular["3"] = null;


            res.render('result', {comandos: calcular});

        }
    }
    


}
