/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

// Declaración 10 variables
// String
let saludo = "hola ";
let correoKevin = "ejemplo@ejemplo.com ";
var juegoFav = "stop ";
let personajeFav = "Luffy ";
let nombre = "Kevin "; 
var heroeFav = "batman ";
var animeFav = "one piece "
let idUsuario = "Kevin_19 ";
var contraseña = "kev123 ";
let despedida = "adios ";

// number
var edadKevin = 28;
var altura = 1.70;
let tallaCamisa = 40;
let tallaPantalon = 38;
let tallaAnillo = 8
var numLetrasNombre = 5;
let numLetrasApellido = 5;
var numLetrasSegNom = 8;
let numLetrasSegAp = 5;
var numLetrasApodo = 4;
//boolean
var isCorreoReal = false;
let isIdUsuario = true;
var isContraseña = false;
let isRealName = true;
var isHeroeFav = true;
let isAltura = false;
var isTallaAnillo = false;
let isEdadKevin = false;
var isDespedida = true;
var isAnimeFav = true;
//const
const ALTURA_KEVIN = 1.70;
const TIPO_SANGRE = "O-rh";
const PI_NUMBER = 3.1415;
const LADOS_TRIANGULO = 3;
const LADOS_CUADRADO = 4;
const LADOS_RECTANGULO = 4;
const NUM_LETRAS = 23;
const NUM_SENTIDOS = 5;
const ESTACIONES_AÑO = 4;
const DIAS_AÑO_BISIESTO = 266;

//operaciones aritmeticas con variables

// resultados de operaciones
var totalLetrasNombre = numLetrasNombre + numLetrasSegNom + numLetrasApellido + numLetrasSegAp;
let totalLetrasApellidos = numLetrasApellido + numLetrasSegAp;
var totalLetrasNombres = numLetrasNombre + numLetrasSegNom;
let primerNombreApellido = numLetrasNombre + numLetrasApellido;
var segundoNombreApellido = numLetrasSegNom + numLetrasSegAp;
let totalLetras = numLetrasNombre + numLetrasSegNom +numLetrasApellido + numLetrasSegAp + numLetrasApodo;

// variables para concatenar texto
var correoId = correoKevin + idUsuario;
let correoContraseña = correoKevin + contraseña;
var datosGenerales = nombre + ALTURA_KEVIN + TIPO_SANGRE;
let datosIntroducidos = correoKevin + contraseña + idUsuario;
let validaciones = isCorreoReal + isContraseña + isIdUsuario;

//Cambio tipo de datos
var nuevoEdadKevin = String (edadKevin);
var nuevaDespedida = Boolean (despedida);
let nuevaAnimeFav = Boolean (animeFav);
let nuevaAltura = String(altura);
var nuevoJuegoFav = Boolean (juegoFav);
