function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//DATO INGRESADO
    filter = input.value.toUpperCase();//CONVERTIR TEXTO EN MAYUSCULA
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) { // recorre tabla columna nombre pelicula
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { // Encontrar nombre pelicula
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }       
    }
}