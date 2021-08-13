var info=[];
function Matricular() {
    nombre= document.getElementById('txtnombre').value;
    edad= document.getElementById('txtedad').value;
    alumno = new Array(nombre,edad);
    info.push(alumno);
    tabla="";
    tabla+="<table>";
    tabla+="<tr><td>Nombre</td><td>Edad</td></tr>";
    for(i=0; i<info.length; i++){
        tabla+="<tr><td>"+info[i][0]+"</td><td>"+info[i][1]+"</td></tr>";
    }
    tabla+="</table>";
    document.getElementById('info').innerHTML=tabla+"<br>Total de alumnos "+info.length;
}