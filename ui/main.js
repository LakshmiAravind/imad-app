console.log('Loaded!');

//Change the main text in index html
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move image

var img = document.getElementById("madi");
img.onClick = function (){
    img.style.marginleft= "200px";
};