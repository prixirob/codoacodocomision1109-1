alert("Hola mundo!")/*Ventana emergente*/
        console.log("Estamos en la consola")

        let nombre = "Priscilla Robin";/*tipo string*/
        var numero = 10;/*Numerica*/
        const PI=3.1416;
        let hayClases=true
        console.log((numero+25)+" "+nombre)/*+ concatenar*/
        console.log(hayClases)
        console.log(5>3) 
        let esFeriado=false;    
        /*Condicionales*/
        if(5>8){/*si es verdadero se ejecuta*/
            console.log("es correcto")
        }else{/*se es falso*/
            console.log("no es correcto") 
        }   
        console.log((5>3) ? "es correcto 5>3": "No es correcto");/*Ternario*/
        if((hayClases == true) && esFeriado != true){/*para que sea true se tiene que cumplir ambas*/
            console.log("Me conecto a la videollamada")
        }else{
            console.log("No me conecto a la videollamada")
        }
        if(25 < 32 || 12 > 20){/*se cumpla una de las dos condiciones*/
            console.log("Se cumplio la condicion")
        }
        let saludo = "Hola como estas?"
        let saludar = saludo + nombre;

let elemento = document.getElementById("principal");
// console.log (elemento)
elemento.innerHTML="<h1 class='text-center bg-info'>"+ saludar + "</h1>";
elemento.documentWrite("<h1 class='text-center bg-info'>"+ saludar + "</h1>")