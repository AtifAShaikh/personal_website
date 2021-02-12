// console.log("script started");
// grabs main menu nav bar
var menu = document.querySelector("#menu");
// grabs side nav bar
var side_nav = document.querySelector(".side_nav");

// shows all cards and sets card container color to default
document.getElementById("all").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    var cards = document.getElementsByClassName("card");
    card_container.style.backgroundColor = "#eca85a";

    for(i=0;i<cards.length;i++){
        cards[i].style.display = "flex";
    }
    
});

// shows only html cards and changes card container color
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

// shows only wordpress cards and hides the rest and changes background color
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

//  shows only unity cards and hides the rest and changes background color
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

// shows drop down menu when menu symbol nav element is clicked
menu.addEventListener("click", function(){
    if(side_nav.style.display === "block"){
        side_nav.style.display = "none";
    } else {
        side_nav.style.display = "block";
    }
});

// hides drop down menu when screen gets bigger
window.addEventListener("resize", function(){
    if(window.innerWidth > 912){
        side_nav.style.display = "none";
    }
});

