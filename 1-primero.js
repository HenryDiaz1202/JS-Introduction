
/*
    Esta es la parte introductoria de elementos básicos que aprender sobre el lenguaje javascript
    en esta parte va desde las formas de mostrar mensajes, declaración e inicialización de variables,
    tipos de datos, operadores aritméticos,relacionales, lógicos, concatenación de cadenas,
    condicionales, ciclos e introducción a las funciones. 

    Para mostrar los datos se usará un html, ya que no solo se usará la consola del navegador, que se usará también,
    llamamos este script en el 1-primero-js.html
    */
//------------------------------------------------------------------------------------------------------------------------
//Maneras de mostrar mensajes, para mostar mensajes de string se usa comillas simples o dobles
alert('Hola mundo 1');
alert("Hola mundo 2");
//Mostrar por consola 
console.log("Hola mundo del JAVASCRIPT");
//Mostrar con write
document.write('Hola mundo - aprendo JS'+ "<br>");

//** VARIABLES **/
//Para la declaración de variables se puede hacer de las siguientes formas
var nombre;
var $nombre;
//para variables constantes
const PI=3.1416; 
//Inicialización de variables
$nombre = '---------Mi nombre es nombre'+ "<br>";
document.write($nombre + "<br>");
document.write('---------- PI= ',PI + "<br>");
//La declaración de una variable y la inicialización se pueden hacer de una vez
var $apellido='apellido';
/** TIPOS DE DATOS **/
/* NUMERICOS - CADENAS(STRING) - BOOLEANOS - FECHAS - SÍMBOLOS - OBJETOS*/
/*NUMERICOS*/ 
var numero=123;
/*CADENAS*/ 
var saludo= 'esta es una variable de cadena';
/*BOOLEANOS*/ 
var estado_1 = true; 
var estado_2 = false;
/*FECHA*/ 
var fecha_completa = Date();
/* PARA VER TIPO DE VARIABLE */
document.write('-------la variable estado_1 es de tipo =',typeof estado_1 + "<br>");
/** OPERADORES ARITMÉTICOS **/
// + , - , / , * , %(módulo)
var uno=10,dos=20,tres=40;
document.write('-------------------valores uno=10 dos=20 tres=40');
var resultado = uno + dos;
console.log('la suma de 10 + 20 = ',resultado );
var resultado1 = tres - uno;
console.log('la resta de 40 - 10 = \n',resultado1 );
var resultado2 = uno * tres;
console.log('la multiplicación de 10 * 40 = \n',resultado2 );
var resultado3 = tres / uno;
console.log('la division 40 / 10 = ',resultado3 );
var resultado4 = dos % uno;
console.log('El módulo de 20 % 10 = ',resultado4 );
//OPERADORES RELACIONALES
// < , > , <= , >= , == , === , !=
// es 10 > 20 y el resultado será true o false 
console.log('------------*********--------ES 10 mayor que 20 = ',10 > 20 );
console.log('------------*********--------ES 10 menor que 20 = ',10 < 20 );
console.log('------------*********--------ES 10 diferente de 20 = ',10 != 20) ;

// OPERADORES LÓGICOS 
// 'Y'=&& 'O'=|| 'NO'=!=
console.log('es 10 mayor que 5 y 2 menor que 1 = ',10>1 && 2<1 );

// CONCATENAR VARIABLES
var nombre;
var apellido;
var edad;
nombre = 'Juan ';
apellido = 'Perez ';
edad = 25;
//Las comillas vacias son para dar espacios entre las cadenas o dar espacio en los valores de las variables
console.log(nombre + ' '+ apellido + 'edad = '+ edad );
//otra forma de concatenar es usar concat
console.log(nombre.concat(apellido,edad));
/** CONDICIONALES **/
// if -- if else -- if else if else -- switch
var uno=10,dos=10;
//if
if(uno == dos){
    alert('Son iguales');
}
//if else
if(uno != dos){
    alert('Son diferentes');
}
else{
    alert('Los valores de las varaibles son iguales');
}
//else if
if(uno != dos){
    alert('Son diferentes');
}
else if(uno >= dos){
    alert('El valor de la variable uno es mayor o igual que la variable dos');
}
//switch(){}
var opcion=2;
switch(opcion){
    case 1: dato='color naranja';break;
    case 2: dato='color verde ya que la variable continen el número 2';break;
    case 3: dato='color morado';break;
    default : dato='el dato está fuera de las opciones';break;
}
console.log(dato);

/** CICLOS **/
// while -- do while -- for -- break-continue
//WHILE
var unos=10;
var doses=19;
document.write("<br>WHILE(); <br>"); 
while(unos < doses){
    document.write(unos + "<br>");
    unos++;
}
document.write("DO{}WHILE(); <br>"); 
//DO WHILE
do{
    document.write(unos + "<br>");
    unos--;
}while(unos >= 10);
// FOR
//CON EL SIGUIENTE BLOQUE DE CÓDIGO SE CREA LA TABLA DE MULTIPLICACIÓN DEL NÚMERO 5
for(var q=0; q<=10 ;q++){
    console.log('5 * '+q+" = "+5*q);
}
//BREAK - CONTINUE
//break
//Con este se detiene un flujo de un ciclo, en el ejemplo de abajo se detendrá en el valor 5 de todo el ciclo y no continuará
for(var q=0; q<=10 ;q++){
    if(q==5){break;}
    document.write('<br> 5 * '+q+" = "+5*q + '<br>');
}
//continue
//Este quita uno o varios valores que se especifiquen en la condición, y seguirá con el flujo
for(var l=0; l<=20 ;l++){
    if(l==5 && l<=10){continue;}
    document.write('<br> 5 * '+l+" = "+5*l);
}

/** FUNCIONES **/
//para ello ponemos la palabra reservada function() y al final de las órdenes usamos la palabra return pra que regrese un valor
//function nombre(){}
function saludar(){
    var Hola= document.write(' <br> Hola mundo, estoy probando funciones');
    return Hola;
}
//para llamar a la función, solo se necesita de poner el nombre de la función más los parentesis y ;
saludar();
//FUNCIÓNES CON PARÁMETROS
function Info(a,b){
    var datos=document.write('<br> Mi nombre es : '+a +' mi edad es :'+b+'años de edad.');
    return datos;
}
Info('Juan',20);

function datoCompleto(nombre1="Juan Antonio Medina"){
    var fullname = nombre1;
    return document.write('<br><br>',fullname);
}
datoCompleto();
//FUNCIÓN COMO UN ARRAY
function months(...meses){
    for(let lista of meses)
    document.write(lista + '<br>');
}
document.write('<br>');
months('ENERO','FEBRERO','MARZO');
//FUNCIÓN ARRAY PASANDO PARÁMETROS
function information(nombre,altura,peso){
    return 'nombre= '+nombre +' altura= '+ altura+' peso ' + peso;
}
var persona= ['juan',165,120];
document.write(information(... persona));
//FUNCIONES ANÓNIMAS

var anomima= function (){
    resultad = '<br>Hola a todos';
    return resultad;
}
document.write(anomima());
