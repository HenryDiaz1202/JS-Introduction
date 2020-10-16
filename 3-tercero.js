/*
    En la tercera parte se trabaja con cadenas string, tendremos las propiedades(lenght) y los métodos.

    Para mostrar los datos se usará un html, ya que no solo se usará la consola del navegador, que se usará también,
    llamamos este script en el 3-tercero-js.html
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------
//PROPIEDADES EN LAS VARIABLES
//lenght 
/*
-- indexof 
-----------------
-- lastIndexOf 
-- match 
-- substring 
-- chartAt 
-- startsWith 
-- endsWith 
-- includes
--------------------
-- repeat
-- replace
-- slice
-- split
-- toLowerCase
-- toUpperCase
*/
var hola=('Hola a todos');
//ver la longitud lenght
document.write(hola);
document.write('<br>La longitud de la cadena es = ',hola.length)
//indexof, sirve para recorrere cadenas de texto y buscar en específico
var texto='<br>Probando las cadenas de caracteres y buscar palabras en específico usando indexof<br>';
document.write(texto);
document.write( 'La palabra  cadenas usando indexOf se encuentra después de la posición = ' + texto.indexOf('cadenas') ); 
//otra forma de hacer eso es mediante search
document.write( '<br>(search)La palabra  cadenas usando search se encuentra después de la posición = ' + texto.search('cadenas') ); 
//search al igual que indexOf muestran el primer valor que encuentre
//en cambio lastIndexOf muestra el último valor encontrado
var texto='<br>Probando las cadenas de caracteres y buscar palabras en específico usando otr forma de cadenas<br>';
document.write( '<br>La palabra  cadenas usando lastIndexOf se encuentra después de la posición = ' + texto.lastIndexOf('cadenas') ); 
//match, es un método de las cadenas que lo que hace es guardar el varlo que estamos buscando
//y al poner /busqueda/gi , la palabra gi nos mostrará la cantidad de palabras relacionadas que ha encontrado
var letras='hola soy henry,hola soy manuel, hola soy pedro';
document.write('<br> cantidad de hola encontrado : <br>'+letras.match(/hola/gi));
//sacar las palabras que se encunentren en un rango, dentro del parentesisi se dice el rango
document.write('<br><br>******************************************<br>');
var rango='hola a todos mi nombre es juan soy de Nicaragua y tengo 10 años';
document.write('<br>',rango);
document.write('<br> en el rango del 2 al 10 se encuentra = '+rango.substr(5,12));
//substring, se usa para mostrar lo que se encuentra en un valor determindo, si ponemos 2 valores va a volver a 
//contar desde el inicio para llegar a lo que se encuntra en la siguiente posición.
document.write('<br> en el rango del 2 y el 12 se encuentra = '+rango.substring(5,12));
//para mostrar un solo caracter se usa chartAt, mostrará un solo caracter en una posición definida +1
document.write('<br> en la posición 15 está el caracter  = '+rango.charAt(15));
//para comprobar que inicia con alguna palabra, esto solo retorna valores booleanos
document.write('<br> la cadena inicia con Hola  = '+rango.startsWith('Hola'));
document.write('<br> la cadena inicia con hola  = '+rango.startsWith('hola'));
//para comprobar que finalice con una palabra, esto solo retorna valores booleanos
document.write('<br> la cadena finaliza con Años = '+rango.endsWith('Años'));
document.write('<br> la cadena finaliza con años  = '+rango.endsWith('años'));
//comprobar si existe alguna palabra relacionada con elgún texto escrito
document.write('<br> existe alguna palabra perro en la cadena  = '+rango.includes('perro'));
document.write('<br> existe alguna palabra nombre en la cadena  = '+rango.includes('nombre'));
//para repetir un mismo varias veces usaremos repeat
document.write('<br>------------------------------REPETIR----------------------------------');
var repetir='<br>hola mundo, usando repeat 5 veces';
//ponemos la variable que vayamos a repetir luego la palabra reservada repeat y en los parentesis ponemos la cantidad de veces que se vaya a repetir var.repeat(x);
document.write(repetir.repeat(5));
//reemplazar una palabra por otra, usamos replace
var cambio='hola, haremos cambio de texto usando replace';
document.write('<br>texto original = ',cambio);
//para lograr eso usamos la palabra replace, dentro de los parentesis pondremos primero la palabra a buscar y sustituir y luego la palabra por la que queremos cambiar
document.write('<br>cambio = ',cambio.replace('haremos','hemos'));
document.write('<br>***************************************************************<br>');
//slice es para quitar los valores anteriormente a la posición que especifiquemos.
var leer='lectura completa, leer después<br>';
document.write(leer);
document.write('lectura después de 17 espacios= '+leer.slice(17));
//con split podemos llevar una cadena a un array
document.write('<br>******* SPLIT ********<br>')
var dias='Domingo, Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo';
document.write(dias);
//convertimos el array, y para comprobar usaremos la consola, en el parentesis se especifica el separador, en la cadena podemos cambiar de ',' a '-' 
console.log(dias.split(','));

document.write('<br>***************************************************************<br>');
//PARA PASAR CADENAS YA SEA DE MAYÚSCULA A MINÚSCULA Y VICEVERSA SE USAN LOS MÉTODOS LOWERCASE Y UPPERCASE
//poner una cadena a minúscula
var mayus='<br>HOLA MUNDO, ESTOY EN MAYÚSCULA<br>';
document.write(mayus);
document.write('cambio = ',mayus.toLowerCase());
//poner cadena en mayúscula
document.write('------------------------------')
var minus=('<br>hola mundo, estoy en minúscula<br>');
document.write(minus);
document.write('cambio = ',minus.toUpperCase());
