
// This function is setting the cookie 

function setCookie( color ){
    Cookies.set('color', color);
    let color_text = document.getElementById("chosen-color");
    color_text.innerHTML = `the color you choose is :${color}`;

}