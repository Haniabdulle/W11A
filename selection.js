let selction = document.getElementById("container");
if(Cookies.get('color')){
    selction.style.backgroundColor=Cookies.get('color');
    selction.innerHTML = "" + Cookies.get('color') + "</h1>";

}

else{
    selction.style.backgroundColor="black";
    selction.innerHTML = "<h1> no color is selected </h1>";

}














