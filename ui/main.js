console.log('Loaded!');

//Change the text of center-text div

var element= document.getElementById('center-text');

element.innerHTML='Hello';

//Move the image
var img = document.getElementById('madi');
img.onclick= function(){
    img.style.marginLeft='100px';
};