alert ("Bienvenidos que fragancia buscas hoy ?")

//pedimos los datos
let nombreCompleto = prompt("Ingresa tu Nombre completo");
let numeroTelefonico = prompt("ingresa tu numero para ponernos en contacto");

alert ("Bienvendio " + nombreCompleto );

//variables
let difusorAerosol = 450;
let difusroTextil = 350;
let difusorVarilla = 500;
let opcion = mostrarMenu ();
let dineroIngresado = 0;

if (opcion !=4){
    venderProducto(opcion);
}else{
    alert("Muchas Gracias Vuelva Pronto!!");

}

//funciones
function mostrarMenu(){
    return prompt("Selecione una opcion: \n1- Difusor Textil : $450 \n2- Difusor Aerosol : $ 350 \n3- Difusor Varilla : $500"); 
}

function venderProducto(opcion){
    switch (opcion){
        case "1":{
            pedirDinero(difusorTextil)
            break;
        }
        case "2":{
            pedirDinero(difusorAerosol)
            break;
        }
        case "3":{
            pedirDinero(difusorVarilla)
            break;
        }
        default:{
            alert("Opcion invalida")
            break;
        }
    }
}

function pedirDinero(precioProducto){
    let dineroIngresado = Number(prompt("¿Con cuanto vas a pagar?"));
    let cambio = dineroIngresado - precioProducto;
    while(dineroIngresado < precioProducto){
                
        if (dineroIngresado>priceProduct){
            alert("Monto invalido");
        }
        else{
          alert("su cambio es: " + cambio);          
        }
    }

    

alert("Gracias, nos pondremos en contacto para cordinar la entrega");
}
