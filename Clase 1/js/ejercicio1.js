
function convertir(){
    
    var num=document.getElementById('txttipo').value;
    tipo=document.getElementById('tipo').value;
    texto ="";
    var d=0, e=0, y=0, b=0;
    
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
    texto +="Dolares: $"+d+"<br>";
    texto+="Euros: Є"+e+"<br>";
    texto+="Yen: ¥"+y+"<br>";
    texto+="Bitcoin: ฿"+b+"<br>";
    document.getElementById('datos').innerHTML=texto;
}