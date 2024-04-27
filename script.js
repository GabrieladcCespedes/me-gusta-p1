/**Gabriela Céspedes */

/**se define la variable text que almacena lo que hay en la clase like  */
var text = document.querySelector(".like");
//console.log(text);

/**se define un contador que almacenara el numero de veces que se da click 
 * al boton like*/
var contador = 0;
/** la funcion likes cambia el texto que esta en la clase like y va inclementando
 * el numero de likes con el numero de veces que se da click al boton like
*/
function likes(){
    contador ++;
    //console.log(contador);
    text.innerText = contador + "like(s)";

}