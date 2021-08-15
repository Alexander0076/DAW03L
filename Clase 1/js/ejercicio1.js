
function convertir(){
    var num=document.getElementById('txttipo').value;
    tipo=document.getElementById('tipo').value;
    table="";
    var d=0, e=0, y=0, b=0;
    if (num !== 0 && tipo !== 0){
        switch(tipo){
            case "1":
                d=parseFloat(num);
                e=parseFloat(num)*0.852131;
                y=parseFloat(num)*110.40;
                b=parseFloat(num)/45523.20;
                break;
            case "2":
                e=parseFloat(num);
                d=parseFloat(num)/0.852131;
                y=parseFloat(num)*129.62;
                b=parseFloat(num)/38461.53;            ;
                break;
            case "3":
                y=parseFloat(num);
                d=parseFloat(num)/110.40;
                e=parseFloat(num)/129.62;
                b=parseFloat(num)/4947646.48;
                break;
            case "4":
                b=parseFloat(num);
                d=parseFloat(num)*45523.20;
                e=parseFloat(num)*38461.53;
                y=parseFloat(num)*4947646.48;
                break;
    
        }
        table+="<table class='table table-dark table-hover'>"
        table+="<tr><td>Dolares</td><td>$"+d+"</td></tr>";
        table+="<tr><td>Euros</td><td>Є"+e+"</td></tr>";
        table+="<tr><td>Yen</td><td>¥"+y+"</td></tr>";
        table+="<tr><td>Bitcoin</td><td>฿"+b+"</td></tr>";
        table+="</table>";
        document.getElementById('datos').innerHTML=table;
    }else if (num == 0 && tipo == 0){
        swal({
            title: 'Error!',
            text: 'Por favor llenar los campos',
            icon: 'error'
        });
        document.getElementById('datos').innerHTML=null;
    }else if(num == 0){
        swal({
            title: 'Error!',
            text: 'Por favor ingrese una cantidad numerica',
            icon: 'error'
        });
        document.getElementById('datos').innerHTML=null;
    }else if (tipo == '0') {
        swal({
            title: 'Error!',
            text: 'Por favor seleccione una opción',
            icon: 'error'
        });
        document.getElementById('datos').innerHTML=null;
    }
    
}