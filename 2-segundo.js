/*
    En esta segunda parte se continúan las funciones pero relacionado con eventos de elementos html,primero 
    van los eventos, luego se crean temporizadores, luego eventos en archivos multimedia(un video),
    ventanas de diálogo como el elert, y al final conversión de valores.

     Para mostrar los datos se usará un html, ya que no solo se usará la consola del navegador, que se usará también,
    llamamos este script en el 2-segundo-js.html
*/
//----------------------------------------------------------------------------------------------------------------------------
/******  EVENTOS Y GESTORES DE LOS EVENTOS*****/
//DESDE HTML
function saludr(){
    alert('Bienvenidos a mi págima web');
}
function sobre(){
    alert('El mouse está sobre el botón.');
}
function salir(){
    alert('El mouse está fuera del botón.');
}

//DESDE JS
var evento_1 = document.querySelector("#uno");
//ponemos el evento que se vaya a usar
evento_1.addEventListener("click",function() {
    alert('Bienvenidos a mi págima web');
});

//EVENTO DE PRESIÓN DEL TECLADO
// KEYDOWN(se presiona una vez) - KEYPRESS(se mantiene presionada) - KEYUP(se deja de presionar)
window.addEventListener('keydown',function(){
    alert('accion');
});

window.addEventListener('keypress',function(){
    alert('accion 2');
});
window.addEventListener('keyup',function(){
    alert('accion3');
});

//saber cual tecla se etá apretando

window.addEventListener('keypress',function(event){
    alert(event.keyCode);
});
//mostrar la tecla presionada
window.addEventListener('keypress',function(event){
    alert('la tecla presionada fue = '+String.fromCharCode(event.keyCode));
});

/** TEMPORIZADOR DESDE JS **/
//SetInterval
//SetTimeOut
/*var tiempo=setInterval(
    function(){
    document.write('texto prueba <br>')
},2000);
*/
//Todo lo que está en comentario es un temporizador, está en comentario para que no se ejecute cada vez que guardemos

//TEMPORIZADOR  CON SETTIMEOUT
//Este temporizador va a cargar una sola vez cada sierto tiempo que lo pongamos, en este ejemplo va a cargar hasta que pasen 2mil milisegundos,sólo una vez
/*setTimeout(
    function(){
        document.write('ES OTRO TEXTO')
    },2000
)
*/
//El código de arriba es del time out, está en comentario para que no moleste en la siguiente opción

/** EVENTOS EN MULTIMEDIAS **/
//para reproducir
var video=document.querySelector("video");
video.addEventListener('play',
function(){
    alert('diste play al video');
});
//para cuando vaya finalizando
video.addEventListener('ended',
function(){
    alert('terminando video');
});
//adelantar el video, y muestra caunto avanzaste
video.addEventListener('seeking',
function(){
    alert(this.currentTime);
});

/***  VENTANAS DE DIALOGO ***/
//ALERT -- CONFIRM -- PROMPT
//alert
var mensje='Hola compañero';
alert(mensje);
//confirm
confirm('te podemos ayudar?');
respuest = confirm('te podemos ayudar?');
//si la respuesta es verdad o si 
if(respuest){
    document.write('Dinos en que podemos ayudar.')
}
else{
    document.write('Gracias por visitarnos.');
}
//hacer referencia a otra página
//si la respuesta es verdad o si 
if(respuest){
    //Dentro de las comillas se pone la ruta del otro archivo
    window.location="#";
}
else{
    document.write('Gracias por visitarnos.');
}
//prompt
prompt('Ingrese su nombre completo : ');
//guardar en variable
var nam = prompt('Ingrese su nombre completo : ');
document.write('<br>Bienvenido : ',nam);

/** CONVERTIR VALORES **/
var precio='150.59';
//una forma es usar la palabra reservada number
var b = Number(precio);
console.log(b,typeof(b));
//crear un entero sin redondear
var c=parseInt(precio);
console.log(c,typeof(b));
//convertir a float
var c=parseFloat(precio);
console.log(c,typeof(b));
//para redondear un valor, el valor dentro del parentesis indica la cantidad de números que se vayan a correr hacia la derecha para redondear
var d = c.toFixed(1);
console.log(d,typeof(b));
//para convertir a string
var cadena = precio.toString();
console.log(cadena,typeof(cadena));