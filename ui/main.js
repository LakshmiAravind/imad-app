console.log('Loaded!');
/*
//Change the main text in index html
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move image

var img = document.getElementById("madi");
var marginLeft = 0;

function moveRight(){
    
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function (){
    //img.style.marginLeft= "200px";
    var interval = setInterval(moveRight,50);
};*/

//var counter = 0;

var button = document.getElementById("counter");
button.onclick = function(){
  
  //create request
  var request = new XMLHttpRequest();
  //capture response in a variable
  // need to req the counter in server js for the current count 
  request.onreadystatechange = function (){
      
       if (request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById("count");
                span.innerHTML = counter.toString();
           }
       }
      
  };
  
 //make the request
 request.open('GET','http://lakshmiaravindm.imad.hasura-app.io/counter',true);
 request.send(null);
  
  //render on the html at current span
  //counter = counter + 1;
  //var span = document.getElementById("count");
    //span.innerHTML = counter.toString();    
        
};