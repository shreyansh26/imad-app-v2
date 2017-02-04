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


var submit= document.getElementById('submit_btn');

submit.onclick = function(){
    //Create a request object
    var request=new XMLHttpRequest();
    
    //Capture Response and store it in a variable
    request.onreadystatechange =function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status===200){
                var names=request.responseText;
                names= JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+ names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML=list;
              
          }
      }  
    };
    //Submit Name
    var nameInput= document.getElementById('name');
    var name=nameInput.value;
    //Make the request
    request.open('GET', 'http://shreyansh26.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
      
};

