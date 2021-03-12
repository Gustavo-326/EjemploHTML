//DATOS DEL TRABAJADOR

let nombreTrabajador= "Gustavo Rodriguez";
let documentoTrabajador="1.000.869.213.";
let correoTrabajador= "Gustavorodriguez406@gmail.com";
let telefonoTrabajador="3136821907";
let direccionTrabajador="Carrera 47#83-29";
let BancoTrabajador="Bancolombia";
let tipoDeCuenta="Cuenta de Ahorros";
let NumeroCuentaBancaria="3541624";

//DATOS DE HORAS TRABAJADAS

let numeroHorasTrabajadas=39
let numeroHorasExtrasTrabajadas=6

//COSTO DE HORAS TRABAJADAS
let costoHorasTrabajadas=20000;
let costoHorasExtras=25000;

//PROCESO

let totalHorasTrabajadas= numeroHorasTrabajadas * costoHorasTrabajadas 
let totalHorasExtras= numeroHorasExtrasTrabajadas * costoHorasExtras
let totalaPagar = totalHorasTrabajadas+totalHorasExtras

//SALIDAS
console.log("------------------------------------------------------------");
console.log("│                                                           │");
console.log("│            CALCULADOR PAGO DE NOMINA SEMANAL              │");
console.log("│                      POSTOBON S.A.S                       │");
console.log("------------------------------------------------------------");
console.log(`Señor Empleado:${nombreTrabajador}`);
console.log(`Identificado con Cedula de ciudadania: ${documentoTrabajador}`);
console.log("------------------------------------------------------------");
console.log("Recibira un total de $"+totalHorasTrabajadas +" Por trabajar " + numeroHorasTrabajadas + " Horas en la semana");
console.log("Recibira un total de $"+totalHorasExtras +" Por trabajar " + numeroHorasExtrasTrabajadas + " Horas extras en la semana");
console.log("------------------------------------------------------------");
console.log("El total del pago a recibir de la semana es de " + "$"+totalaPagar);
console.log("------------------------------------------------------------");
console.log("El anterior valor sera consignado a "+ BancoTrabajador+" en la " +tipoDeCuenta+" numero "+ NumeroCuentaBancaria);
console.log("------------------------------------------------------------");
console.log("│            GRACIAS POR USAR NUESTRO PROGRAMA             │");
console.log("│                      MARZO 2021                          │");
console.log("------------------------------------------------------------");