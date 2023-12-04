const scanner =require("promt-sync")({siginit:true});

//declaraciones
const numeroTirar=scanner("¿Cuantos números quieres tirar =>?");
const numeroDeDado=scanner("Elige entre dado de 6 o de 10 caras=>"+ Comprobacion(numeroDeDado,numeroTirar));
let vecesTiradas=0;
function Comprobacion(x,y) {
    //comprobamos
    if(Number(x)&&Number(y)){
    //numero de dados operacion
    if(x==6){
         for(let i=0;i<y;i++){

       vecesTiradas= Math.floor(Math.random()*6 )+1;  
     
     }
  }
    if(x==10){
        for(let i=0;i<y;i++){

            vecesTiradas= Math.floor(Math.random()*10 )+1;  
          
          }
    
   
    }
}

}
console.log("Has tirado"+numeroTirar+"dados"+numeroDeDado)
console.log("Los resultados han sido:"+vecesTiradas);