var info=[];
function Matricular() {
    nombre= document.getElementById('txtnombre').value;
    edad= document.getElementById('txtedad').value;
    alumno = new Array(nombre,edad);
    edades=0;
    suma = 0;
    media= 0;
    max=[0];
    min=[0];
    info.push(alumno);
    tabla="";
    tabla+="<table class='table'>";
    tabla+="<thead><tr><th scope='col'>Nombre</th><th scope='col'>Edad</th></tr></thead>";
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
    tabla+="<thead><tr><th scope='col'>Edad maxima</th><th scope='col'>Edad minima</th></tr></thead>";
    tabla+="<tr><td>"+max+"</td><td>"+min+"</td></tr>";
    tabla+="</table>";
    document.getElementById('info').innerHTML=tabla+"<br>Promedio de edad: "+media+"<br>Total de alumnos "+info.length;
}