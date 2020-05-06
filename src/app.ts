import State from './State'
import calcula2 from './calcula2'
import traducir from './Traducir'

//Servidor y complementos
console.log('Server on port 3000');

var express = require('express');
var app = express();
var server = app.listen(3000);

app.set('view engine','ejs');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Datos de comandos ingresados

var calcular = { 
    result: "0",
    str: "",
}

//Get / Recibir pagina

app.get('/',function(req,res){
    res.render('result',{comandos: calcular});
});

//Post / Mandar Datos Ingresados

app.post('/',urlencodedParser, total);

// Funcion

function total(req,res){

    if(req.body.cmd == ""){
        res.render('result', {comandos: calcular});
    }
    
    else{

        //Almacenar Datos   // Enviar Datos // Calcular Datos 

        if(calcular["result"] == "Syntax Error"){
            calcular["result"] = "0";
            res.render('result', {comandos: calcular});
        }
        else if(calcular["1"] == null){
            calcular["1"] = req.body.cmd;
            calcular["str"] = calcular["1"];
            res.render('result', {comandos: calcular});
        }

        //Ultimo problema, carga pero no calcula

        else if(calcular["2"] == null){

            if(calcular["result"] != "0"){
                calcular["1"]= State.RealizarOp(calcular["result"],calcular["1"],req.body.cmd);
                calcular["result"] = calcular["1"];

                // Borrar datos
                calcular["1"] = null;
                calcular["2"] = null;
                calcular["str"] = null;

                res.render('result', {comandos: calcular});
            }
            else {
                calcular["2"] = req.body.cmd;
                calcular["str"] = calcular["str"] + " " +  calcular["2"];
                res.render('result', {comandos: calcular});
            }
            
        }

        else{

                //Mandar a calculadora
                calcular["1"] = State.RealizarOp(calcular["1"],calcular["2"],req.body.cmd);

                calcular["result"] = calcular["1"];
                // Borrar datos
                calcular["1"] = null;
                calcular["2"] = null;
                calcular["str"] = null;

                res.render('result', {comandos: calcular});
            
        }
    }
    
}
