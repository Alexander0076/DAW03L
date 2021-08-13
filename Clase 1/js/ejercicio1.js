
function convertir(){
    
    var num=document.getElementById('txttipo').value;
    tipo=document.getElementById('tipo').value;
    texto ="";
    var d=0, e=0, y=0, b=0;
    
    switch(tipo){
        case "1":
            d=parseFloat(num);
            e=parseFloat(num);
            y=parseFloat(num)*110.43;
            b=parseFloat(num)*45523.20;
            break;
        case "2":
            d=parseFloat(num);
            e=parseFloat(num);
            y=parseFloat(num);
            b=parseFloat(num);            ;
            break;
        case "3":
            d=parseFloat(num);
            e=parseFloat(num);
            y=parseFloat(num);
            b=parseFloat(num);
            break;
        case "4":
            d=parseFloat(num);
            e=parseFloat(num);
            y=parseFloat(num);
            b=parseFloat(num);
            break;

    }
    texto +="Dolares: $"+d+"<br>";
    texto+="Euros: "+e+"Є<br>";
    texto+="Yen: "+y+"¥<br>";
    texto+="Bitcoin: "+b+"BTC<br>";
    document.getElementById('datos').innerHTML=texto;
}