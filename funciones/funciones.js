/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

//Perimetro de un circulo
function perimetroCirculo(radioCi){
    let perimetro = Math.PI * (radioCi * radioCi)
    console.log ("El perimetro del circulo es " + perimetro + "metros")
}

const perCirculo = (radioCi) => perimetro = Math.PI * (radioCi * radioCi)

//Area de un rectangulo
function areaRectangulo(base, altura){
    let area = base * altura
    console.log ("El area del rectangulo es " + area + "metros")
}

const areaRect = (base, altura) => area = base*altura

//cuadrado de un numero
function cuadradoNum(numero){
    let cuadrado = numero * numero
    console.log ("El cuadrado del numero es " + cuadrado)
}

const numCuadrado = (numero) => cuadrado = numero * numero

//conversión de grados celcius a farenheit
function celciusAFarenheit(grados){
    let gradosCelcius = grados*(9/5)+32
    console.log ("El resultado es " + gradosCelcius +"grados Farenhei")
}

const celsiusFarenheit = (grados) => gradosFarenheit = grados*(9/5)+32

// voltaje a partir de resistencia y la corriente
function voltajeDeRyC(corriente, resistencia){
    let voltaje = corriente * resistencia 
    console.log ("El voltaje es " + voltaje + "W")
}

const voltajeConRyC = (corriente, resistencia) => voltaje = corriente * resistencia

//volumen de una esfera
function volumenEsfera(radioEsf){
    let volumenEsf = (1.33*Math.PI)*(radioEsf*radioEsf*radioEsf)
    console.log ("El volumen de la esfera es" + volumenEsf + "metros cubicos")
}

const volumenEsf = (radiosEsf) => volumenEsfe= (1.33*Math.PI)*(radioEsf*radioEsf*radioEsf)