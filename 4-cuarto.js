/*
    Empazamos a la introducción a los ARRAYS(arreglos)

    Para mostrar los datos se usará un html, ya que no solo se usará la consola del navegador, que se usará también,
    llamamos este script en el 4-cuarto-js.html
*/
/*
-- length
-- push
-- pop
-- join
-- split, es la otra forma de hacer array, que se muestra en el fichero 3-tercero.js
-- array.from 
-- sort
-- reverse
*/

//dos maneras de declarar arrays, las comillas sólo se usan en datos string los numéricos no las llevan
/*
forma-1
var semana = new Array('Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado');
forma-2
var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
*/
var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
//mostrar el dato que está en una posición
document.write(semana[2]);
//---ARRAY MULTIDIMENSIONAL-------------
document.write('<br>********* MULTIDIMENSIONAL *************<br>')
var multi=
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
document.write(multi);
document.write('<br>Comprobamos en la consola')
console.log(multi);
//para sacar un valor del arreglo multidimensional
//donde el valor del primer corchete es el de la fila que vayamos a ver ejemplo multi[0] mostraría 1,2,3 y así los demas
document.write('<br>valor de la fila 0 = ',multi[0]);
//y el segundo corchete es el valor que vayamos a ver, a si ponemos multi[0][2] mostraría 3 ya que tomaría la fila 0 y el valor de la posción 2 que es 3  
document.write('<br>Valor de comprobación al comentario :  ',multi[0][2]);
//adentro del array podemos agregar cuantos arrays querramos, y para acceder a un valor dentro del 3er array se hace de la misma forma nada más que poniendo 3 valores
var multi_uno=
[
    [1,2,3,
        [5,9,6]],
    [4,5,6],
    [7,8,9,
        [6,4,3]]
];
//ver valor del array 0 y dentro del array 0 ver su array 3 subindice 2, retornaría 6
document.write('<br>Valor de comprobación = ',multi_uno[0][3][2]);
/* ------------------------------ MANEJO DE ARRAYS -------------------------------------------------*/
document.write('<br>******************************** MANEJO DE ARRAYS ******************************************<br>');
var arreglo=[5,10,15,20];
//para ver el tamaño del array
console.log('hay ',arreglo.length,' elementos en el array.');
console.log(arreglo);
document .write('hay ',arreglo.length,' elementos en el array.<br>');
document.write(arreglo);
//push es para agregar un elemento más en el array
document.write('<br>PUSH<br>'),
arreglo.push(35);
arreglo.push(90);
document.write(arreglo);
//pop lo que hace es quitar el último elemento del array
document.write('<br>POP<br>'),
//mostramos el elemento que se va a quitar
document.write(arreglo.pop());
document.write('<br>',arreglo);
//join nos permite convertir un arreglo a un string
//primero lo hacemos string
arreglo.join();
//para comprobar que se ha convertido a string
document.write('<br> ahora es string = ',arreglo);
console.log(typeof(arreglo.join()));
//PODEMOS CREAR UN ARRAY IMPORTANDO LOS DATOS DESDE HTML USANDO ARRAY.FROM
var setimana = Array.from(document.querySelectorAll('#dias p'));
var creado = setimana.map (dia => dia.textContent);
//usamos la consola
console.log(creado);
//sort nos permite ordenar los valores del arreglo
document.write('<br>',semana);
//ordenar
document.write('<br>ordenado = <br>');
document.write(semana.sort());
//mostrará en reversa pero lo que ya está ordenado porque lo hicimos con el sort
//de fin a inicio con reverse
document.write('<br>reversa = <br>');
document.write(semana.reverse());