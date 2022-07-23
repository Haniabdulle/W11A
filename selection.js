// Selection value will get value of selection cookies//
// If cookies value is one of the colours then this function will be used // 

let selction = document.getElementById("container");
if(Cookies.get('color')){
    selction.style.backgroundColor=Cookies.get('color');
    selction.innerHTML = "" + Cookies.get('color') + "</h1>";

}

// This else statment if user doesnt choose one of the colour options //
else{
    selction.style.backgroundColor="black";
    selction.innerHTML = "<h1> no color is selected </h1>";

}














