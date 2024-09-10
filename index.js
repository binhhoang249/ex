function myFunction(){
    var a= parseInt(document.getElementById('se1').value);
    var b= parseInt(document.getElementById('se2').value);
    var value= parseInt(document.getElementById('select').value);
    var k;
    var type;
    switch (value){
        case 1:
            k=parseFloat(a+b*2)/3;
            break;
        case 2:
            k=parseFloat(a*2+b*3)/5;
            break;
        case 3:
            k=parseFloat(a*3+b*4)/7;
            break;
    }
    if (k>=9){
        type="Xuất sắc"
        document.getElementById('demo').style.color = "red";
    } else if(k>=8){
        type="Giỏi"
        document.getElementById('demo').style.color = "blue";
    }else if(k>=6.5){
        type="Khá"
        document.getElementById('demo').style.color = "green";
    }else if (k>=3.5){
        type="Trung bình"
        document.getElementById('demo').style.color = "black";
    }else{
        type="Yếu"
        document.getElementById('demo').style.color = "gray";
    }
    document.getElementById('kq').value = k;
    document.getElementById('demo').innerHTML =type;
}
function myFunction2 (){
    document.getElementById('se1').value =" ";
    document.getElementById('se2').value =" ";
}