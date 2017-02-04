console.log('Loaded!');

//Change the text of center-text div

var element= document.getElementById('center-text');

element.innerHTML='Hello';

//Move the image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft= marginLeft+'px';  
}
img.onclick= function(){
    var interval=setInterval(moveRight,100);
    img.style.marginLeft ='100px';
};