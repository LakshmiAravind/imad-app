console.log('Loaded!');

//Change the main text in index html
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move image

var imgELement= document.getElementById("madi");
imgElement.onClick = function (){
    imgElement.style.marginleft= "200px";
};