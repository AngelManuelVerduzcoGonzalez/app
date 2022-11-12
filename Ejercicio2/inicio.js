function numeroMayor() {
    let numero1 = parseInt(document.getElementById("num1").value); 
    let numero2 = parseInt(document.getElementById("num2").value);
    console.log(numero1);
    console.log(numero2);

// while (numero1 != "" && numero2 != "") {
//     console.log("Estan vacios");
// }

    if (numero1 >= numero2) {
        if (numero1 == numero2) {
            alert("Los numeros son iguales")
        } else {
            alert("El numero mayor es: " + numero1)
        }    
} else {
    alert("El numero mayor es:" + numero2)
    }
}