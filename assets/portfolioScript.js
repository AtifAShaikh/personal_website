console.log("script started");

var menu = document.querySelector("#menu");
var side_nav = document.querySelector(".side_nav");


document.getElementById("all").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    var cards = document.getElementsByClassName("card");
    card_container.style.backgroundColor = "#eca85a";

    for(i=0;i<cards.length;i++){
        cards[i].style.display = "flex";
    }
    
});

document.getElementById("html").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    var cards = document.getElementsByClassName("card");
    card_container.style.backgroundColor = "#c32148";

    for(i=0;i<cards.length;i++){
        if(cards[i].className !== "card html_card"){
            cards[i].style.display = "none";
        } else {
            cards[i].style.display = "flex";
        }
        
    }
});

document.getElementById("wordpress").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    var cards = document.getElementsByClassName("card");
    card_container.style.backgroundColor = "#21759b";
    for(i=0;i<cards.length;i++){
        if(cards[i].className !== "card wp_card"){
            cards[i].style.display = "none";
        } else {
            cards[i].style.display = "flex";
        }
        
    }
});

document.getElementById("unity").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    var cards = document.getElementsByClassName("card");
    card_container.style.backgroundColor = "#00a698";
    for(i=0;i<cards.length;i++){
        if(cards[i].className !== "card unity_card"){
            cards[i].style.display = "none";
        } else {
            cards[i].style.display = "flex";
        }
        
    }
});

menu.addEventListener("click", function(){
    if(side_nav.style.display === "block"){
        side_nav.style.display = "none";
    } else {
        side_nav.style.display = "block";
    }
});

window.addEventListener("resize", function(){
    if(window.innerWidth > 912){
        side_nav.style.display = "none";
    }
});

