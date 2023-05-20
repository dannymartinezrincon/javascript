function limpiar(){
    document.getElementById("Nota1").value="";//borrar todo en cuadro texto Nota1
    document.getElementById("Nota2").value="";//borrar todo en cuadro texto Nota1
    document.getElementById("Nota3").value="";//borrar todo en cuadro texto Nota1
    document.getElementById("Definitiva").value="";//borrar todo en cuadro texto Nota1
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//Asigna notas ingresadas x teclado
    var n2=document.getElementById("Nota2").value;//Asigna notas ingresadas x teclado
    var n3=document.getElementById("Nota3").value;//Asigna notas ingresadas x teclado
    //cacular definitiva
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;//fx promedio
    //COLOCAR NOTA DEFINITIVA EN FOTMULARIO
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}