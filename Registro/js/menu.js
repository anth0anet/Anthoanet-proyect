document.getElementById("general-toggle").addEventListener("click", function(event){
    event.preventDefault();
    var submenu = document.getElementById("general-submenu");
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
});
