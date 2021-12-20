function myColor(){
    var red=document.getElementById('red').value;
    var green=document.getElementById('green').value;
    var blue=document.getElementById('blue').value;
    var Color='rgb('+ red +','+green+','+blue+')';
    document.body.style.backgroundColor=Color;
    document.getElementById('box').value=Color;
}
document.getElementById('red').addEventListener('input',myColor);
document.getElementById('green').addEventListener('input',myColor);
document.getElementById('blue').addEventListener('input',myColor);