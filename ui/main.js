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

button.onclick = function(){
    //Create a request object
    var request=new XMLHttpRequest();
    
    //Capture Response and store it in a variable
    request.onreadystatechange =function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
              
          }
      }  
    };
    //Make the request
    request.open('GET', 'http://shreyansh26.imad.hasura-app.io/counter',true);
    request.send(null);
      
};