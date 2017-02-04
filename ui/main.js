console.log('Loaded!');

/*//Change the text of center-text div

var element= document.getElementById('center-text');

element.innerHTML='Hello';

//Move the image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft+=2;
    img.style.marginLeft= marginLeft+'px';  
}
img.onclick= function(){
    var interval=setInterval(moveRight,50);
    //img.style.marginLeft ='100px';
};*/

var button =document.getElementById('counter');
var counter=0;
button.onclick = function(){
    //Make a request to counter endpoint
    
    //Capture Response and store it in a variable
    
    //Render the variable in correct span
    counter+=1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
      
};