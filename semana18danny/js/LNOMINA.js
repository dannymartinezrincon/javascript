// Captura de datos de salario minimo legal vigente y subsidio transporte
let smlv = parseFloat(prompt("INGRESE SALARIO MINIMO 2023"));
let subtte = parseFloat(prompt("INGRESE SUBSIDIO TRANSPORTE 2023"));

function liquidar(){
    //SUELDO BASICO
    let n1 = document.getElementById("salario").value; //Bajar la informacion salario desde el formulario
    let n2 = document.getElementById("dias").value; //Bajar la informacion dias laborados desde el formulario
    sueldo = parseInt(n1)/30*parseInt(n2); //Calcular sueldo basico
    document.getElementById("basico").value=sueldo.toFixed(0); //Subir info sueldo al formulario

    // Subsidio de transporte
    if (n1>=2*smlv){
        subsidiot=0; //No se le otorga
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }

    //Recargo nocturno
    var nhrn = document.getElementById("hrn").value;
    let vhrn = n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0);

    //TOTAL DEVENGADO
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);

    //ASIGNAR TOTAL DEVENGADO
    let totaldevo=document.getElementById("totaldev").value;
    //SECCION DE LOQUIDACION DEDUCCIONES
    // EPS Y PENSION
    let eps00=(totaldevo-subsidiot)*0.04; // EPS$$
    let pens00=(totaldevo-subsidiot)*0.04; // PENSION
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pens00.toFixed(0);

    // FONDO DE SOLIDARIDAD
    let fondo = 0;
    if (n1>=4*smlv){
        let fondo=totaldevo*0.01; //FONDO $$
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    
    //PRESTAMO 
    let presta=document.getElementById("prestam").value;

    //TOTAL DEDUCCIONES
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);

    //ASIGNAR DEDICCIONES
    let totalddc=document.getElementById("totaldedu").value;
    //CALCULAR VALOR NETO A PAGAR
    let vneto=totaldevo-totalddc;   
    document.getElementById("neto").value=vneto.toFixed(0);
}