//  logo redirecct to homepage

var isopenche = false;

function homepage() {
    window.location.href = "./index.html";
}

//  all category option below

function allCateShow() {

}

console.log("This is fired")
var allButton = document.getElementById("allbutton");

allButton.onclick =  function(e){

    if (isopenche == true) {
        document.getElementById("all-category-drop-down").style.display = "none";
        isopenche = false;
    }else{
        
        document.getElementById("all-category-drop-down").style.display = "flex";
        isopenche = true;
    }
    e.preventDefault();
    e.stopPropagation();
    
};

console.log(allButton);

var locationbutton = document.getElementById("locationbutton");
locationbutton.onclick = locationniclick;

function locationniclick(e){
    var popup = document.getElementById("popupforlocation");
    popup.style.display = "flex";
    e.preventDefault();
    e.stopPropagation();
}

document.onclick = function(){
    var popup = document.getElementById("popupforlocation");
    popup.style.display = "none";

    document.getElementById("all-category-drop-down").style.display = "none";

}

// function havebadhuloadthayjiyu(){
//     //console.log("Badhu j load thay jiyu");

    

// }

// document.addEventListener("DOMContentLoaded", havebadhuloadthayjiyu);


