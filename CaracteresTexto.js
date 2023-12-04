


const scanner= require("prompt-sync")({sigint: true});

let final = "";
let validar=true;
let suma =0;
let numeros="0123456789";

function COmprobar(x,y) {
    for(let i=0;i<coso.length;i++){
        console.log("DEBUG--->"+coso);
        for(let j=0;i<numeros.length;j++){
            if(coso.charAt(i)!==numeros.charAt(j)){
                suma += 1;
                console.log("DEBUG--->"+suma);
            }
        }
       }
    
}
while (validar) {
   

    let coso = scanner("Ingrese una cadena de texto o números  escriba 'cancelar' para terminar:");
 
    if (coso.toLowerCase() === "cancelar") {
        validar =false;
    }
   
    final += coso;
    validar = false;

}
console.log("Cadenas concatenadas: " + final);
console.log("Lo caracteres que no son vocales suman: "+suma );
