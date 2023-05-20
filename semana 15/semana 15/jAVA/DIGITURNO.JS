function prefer(){
    let num=1; //numero inical de turno
    let res=true;
    while(num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DE USUARIO")
        if(nomuser!==null){
            var n=num.toString().padStar(2,"0");
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementa turno
        }else{
            alert("ERROR..NO HAY DATOS");
            break;
        }
    }
}
function user(){
    let num=1; //numero inical de turno general
    let res=true;
    while(num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DE USUARIO")
        if(nomuser!==null){
            var n=num.toString().padStar(2,"0");
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementa turno
        }else{
            alert("ERROR..NO HAY DATOS");
            break;
        }
    }
}