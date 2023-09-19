// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function edadDinamica (edad){
    if(edad >= 18){
        console.log("Mayor de edad");
    }else{
        console.log("menor de edad");
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function promedioDinamico (cal1, cal2, cal3, cal4){
    var calFinal = (cal1+cal2+cal3+cal4)/4
    if(calFinal >= 7){
        console.log("aprobado su promedio es" + calFinal);
    }else{
        console.log("reprobado su promedio es" + calFinal);
    }
}


/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function DivisibleDinamico4 (num){

    let numDivisibleSiete  = num%7
    let numDivisibleOcho = num%8
    if(numDivisibleOcho == 0 && numDivisibleSiete == 0){
        console.log("verdadero");
    }else{
        console.log("falso");
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function DivisibleDinamico5 (num){

    let numDivisibleCuatro  = num%4
    let numDivisibleNueve = num%9
    if(numDivisibleCuatro == 0 || numDivisibleNueve == 0){
        console.log("verdadero");
    }else{
        console.log("falso");
    }
}
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function CalculadoraDinamica (operacion, num1, num2){

    switch (operacion){
        case 1:
            let suma = num1 + num2 
            console.log("el resultado de la suma es " + suma);
            break;
        case 2: 
            let resta = num1 - num2 
            console.log("el resultado de la resta es " + resta);
            break;
        case 3: 
            let multiplicacion = num1 * num2 
            console.log("el resultado de la multiplicación " + multiplicacion);
            break;
        case 4: 
            let division = num1 / num2 
            console.log("el resultado de la division es " + division);
            break;
        default: 
            console.log("numero no valido");
            break;
    }   
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function recomendacionDinamica (genero){
    genero = genero.toUpperCase();
    genero = genero.toLowerCase();
    
    switch (genero){
        case "accion": 
            console.log("Rapido y furiosos");
            break;
        case "drama": 
            console.log("La ballena");
            break;
        case "comedia": 
            console.log("Son como niños");
            break;
        case "romance": 
            console.log("Cuestión de tiempo");
            break;
        case "suspenso": 
            console.log("Saw");
            break;
        case "terror": 
            console.log("La monja");
            break;
        default: 
            console.log("categoria no disponible");
            break;
    }   
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function cajeroDinamico (operacion){

    switch (operacion){
        case 1: 
            console.log("retirar dinero: ¿cuanto desea retirar?");
            break;
        case 2: 
            console.log("transferencia: ¿cuanto desea transferir?");
            break;
        case 3: 
            console.log("depositar dinero: ¿cuanto desea depositar?");
            break;
        case 4:  
            console.log("pago de servicios: ¿que servicio quiere pagar?");
            break;
        default: 
            console.log("operación no valida");
            break;
    }   
}

function ATMDinamico (operacion){
    if(prueba === 1){
    console.log("retirar dinero: ¿cuanto desea retirar?");
    } else if (prueba === 2){
    console.log("transferencia: ¿cuanto desea transferir?");
    } else if (prueba ===3){ 
    console.log("depositar dinero: ¿cuanto desea depositar?");
    } else if (prueba ===4){ 
    console.log("pago de servicios: ¿que servicio quiere pagar?");
    }else{
    console.log("operación no valida");
}
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

function divisasDinamica (cantidadPesos, moneda){

    switch (moneda){
        case 1:
            let dolares = cantidadPesos * 17.07 
            console.log("son $" + dolares);
            break;
        case 2: 
            let euros= cantidadPesos * 18.23
            console.log("son " + euros + " euros");
            break;
        case 3: 
            let yenes = cantidadPesos * 8.66 
            console.log("son " + yenes + " yenes japoneses");
            break;
        case 4: 
            let libras = cantidadPesos * 0.047 
            console.log("son " + libras + " libras esterlinas");
            break;
        case 5: 
            let francos = cantidadPesos * 0.053 
            console.log("son " + francos + " francos suizos");
            break;
        default: 
            console.log("moneda no disponible");
            break;
    }   
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function descuentoDinamico (precio, codigo){

    if(codigo == "DESCUENTO10"){
        let descuento = precio - (precio * 0.10)
        console.log("Descuento conseguido, su precio original es " + precio + " con su descuento son " + descuento);
    }else{
        console.log("error de codigo su precio es" + precio);
    }
}