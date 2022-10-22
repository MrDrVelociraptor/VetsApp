// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.onload = () => {
    const user = localStorage.getItem("usertype");
    var Image_Id = document.getElementById('BG');
    if (user == "catperson") {
        $('#BG').css('background-image', 'url(imgs/catBG.jpg)');
    }
    else if (user == "dogperson") {
        $('#BG').css('background-image', 'url(imgs/dogBG.jpg)');

    }
    else if (user == "animals") {
        $('#BG').css('background-image', 'url(imgs/catDogBG.jpg)');
    }
}

function changePic(value) {
    if (value == "Cats") {
        $('#BG').css('background-image', 'url(imgs/catBG.jpg)');
        localStorage.setItem("usertype", "catperson")
    }
    if (value == "Dogs") {
        $('#BG').css('background-image', 'url(imgs/dogBG.jpg)');
        localStorage.setItem("usertype", "dogperson")
    }
    if (value == "CatsnDogs") {
        $('#BG').css('background-image', 'url(imgs/catDogBG.jpg)');
        localStorage.setItem("usertype", "animals")
    }
}

