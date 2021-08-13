var info=[];
function Matricular() {
    nombre= document.getElementById('txtnombre').value;
    edad= document.getElementById('txtedad').value;
    alumno = new Array(nombre,edad);
    suma = 0;
    media= 0;
    max=[0];
    min=[0];
    info.push(alumno);
    tabla="";
    tabla+="<table>";
    tabla+="<tr><td>Nombre</td><td>Edad</td></tr>";
    for(i=0; i<info.length; i++){
        tabla+="<tr><td>"+info[i][0]+"</td><td>"+info[i][1]+"</td></tr>";
        edades=info[i][1];
        suma += parseInt(edades);
        
        if(max < edades) {
            max = edades; 
        }else{
            min = edades; 
        }
        
    }

    media = suma / info.length;
    tabla+="<tr><td>Edad maxima:</td><td>"+max+"</td></tr>";
    tabla+="<tr><td>Edad minima:</td><td>"+min+"</td></tr>";
    tabla+="<tr><td>Promedio de edad:</td><td>"+media+"</td></tr>";
    tabla+="</table>";
    document.getElementById('info').innerHTML=tabla+"<br>Total de alumnos "+info.length;
}