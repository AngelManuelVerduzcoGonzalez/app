// let variable = "Hola Mundo";

// alert(variable);

// console.log(variable);

// function saludo() {
//     let nombre= "Angel";
//     let variable = "Hola "+ nombre;
//     alert (variable);
// }
// saludo();
// function SUMA(numero1,numero2) {
//     let resultado=numero1+numero2;
//     alert("El resultado es "+resultado);
// }
// SUMA(1,7);
// let numero = parseFloat(prompt("Dame un número"));
// let numero2 =parseFloat(prompt("Dame otro número"));

// console.log(typeof (numero + numero2));

// document.write(numero + numero2);

let numeros = [3,"Angel ",true,false,"hola "]; 

//los array tienen un indice y comienza en 0


//el ciclo for es un bucle
//el SCOPE es el alcance 
// for (let i = 0; i < numeros.length; i++) {
    
//     console.log(numeros[i]);
    
//     document.write(numeros[i]+ "<br>");
// }
let variablee = true;
if (variablee) {
    document.write(variablee)
}

if (variablee = true) {
    document.write("Mi variable es true")
    
} else {
    document.write("Mi variable es falsa")
    
}

if (condition) {
    
} else {
    if (condition) {
        
    } else {

    }
}
let dia = "Martes"
switch (dia) {
    case "Lunes":
        console.log("El dia es Lunes");
        break;
    case "Martes":
        console.log("El dia es Martes");
    default:
        console.log("Es otro dia de la semana");
        break;
}