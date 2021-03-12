//DATOS DE USUARIO
let nombreUsuario="Gustavo Rodriguez";


//DATOS MASA CORPORAL USUARIO
let pesoUsuario= 67
let estaturaUsuario= 1.70

//MENSAJES IMC
let mensaje1= "Tu peso es insuficiente"
let mensaje2= "Tu peso es Normal"
let mensaje3= "Tienes sobrepeso en grado 1"
let mensaje4= "Tienes Sobrepeso en grado 2 (Pre-obesidad)"
let mensaje5= "Tienes obesidad tipo 1"
let mensaje6= "Tienes Obesidad tipo 2"
let mensaje7= "Tienes Obesidad Tipo3 (Morbida)"
let mensaje8= "Tienes obesidad tipo 4 (Extrema)"
//DATOS DE PROCESO
imc= pesoUsuario/(estaturaUsuario*estaturaUsuario)
//SALIDAS

console.log("------------------------------------------------------------");
console.log("│            MEDIDOR DE INDICE DE MASA CORPORAL            │");                               
console.log("│                    GIMNASIO BODYTECH                     │");
console.log("------------------------------------------------------------");
console.log(`Bienvenido:${nombreUsuario}`);
console.log("------------------------------------------------------------");
console.log("En esta programa conoceremos tu indice de masa corporal siguiendo estos estandares:");
console.log("------------------------------------------------------------");
console.log("Menor que 18,5 --> Peso insuficiente");
console.log("Entre 18,5-24,9 --> Peso Normal");
console.log("Entre 25-26,9 --> Sobrepeso grado 1");
console.log("Entre 27-29,9 --> Sobrepeso grado 2(Preobesidad)");
console.log("Entre 30-34.9 --> Obesidad de tipo 1");
console.log("Entre 35-39.9 --> Obesidad de tipo 2");
console.log("Entre 40-49,9 --> Obesidad de tipo 3 (mórbida)");
console.log("Entre Mayor que 50 --> Obesidad de tipo 4 (extrema)");
console.log("------------------------------------------------------------");
console.log("Solo ingresa tienes que ingresar tu peso en KG y estatura en metros:");
console.log("------------------------------------------------------------");
console.log("Ingresa tu peso en KG:"+pesoUsuario);
console.log("Ingresa tu estatura en metros:"+estaturaUsuario);
console.log("------------------------------------------------------------");
console.log( `${nombreUsuario}`);
console.log("Tu indice de masa corporal es de:"+imc);

//CONDICIONALES
if (imc<18.5){
    console.log(mensaje1);
}
else if (imc>=18.5 && imc <=24.9){
    console.log(mensaje2);
}
else if (imc>=25 && imc <=26.9){
    console.log(mensaje3);
}
else if (imc>=27 && imc<=29.9){
    console.log(mensaje4);   
}
else if (imc>=30 && imc <=34.9){
    console.log(mensaje5);    
}
else if (imc>=35  && imc<=39.9){
    console.log(mensaje6);
}
else if (imc>=40 && imc <=49.9){
    console.log(mensaje7);
}else if (imc>50)
    console.log(mensaje8);
console.log("------------------------------------------------------------");



