function numeroMayor() {
    let numero1 = parseInt(document.getElementById("num1").value); 
    let numero2 = parseInt(document.getElementById("num2").value);
    console.log(numero1);
    console.log(numero2);




while (!isNaN(numero1) && !isNaN(numero2)) {
    console.log("Se hace la comparación de los numeros");
    if (numero1 >= numero2) {
        if (numero1 == numero2) {
            alert("Los numeros son iguales")
        } else {
            alert("El numero mayor es: " + numero1)
        }    
    } else {
        alert("El numero mayor es: " + numero2)
    }
    break;
}     
}
let contador = 0

while (contador <= 10) {
    document.write(contador + "<br>")
    contador ++;   
}

do {
    document.write(contador + "<br>")
    contador ++; 
} while (contador == 10);