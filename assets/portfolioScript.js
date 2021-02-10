console.log("script started");

document.getElementById("all").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    card_container.style.backgroundColor = "#ba79bd";
});

document.getElementById("html").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    card_container.style.backgroundColor = "#c32148";
});

document.getElementById("wordpress").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    card_container.style.backgroundColor = "#21759b";
});

document.getElementById("unity").addEventListener("click", function(){
    var card_container = document.getElementById("card_container");
    card_container.style.backgroundColor = "#00a698";
});