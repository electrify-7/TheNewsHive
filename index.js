const searchicon = document.querySelector(".searchicon");
const icon = document.querySelector(".icon");

searchicon.addEventListener("mouseover", () => {
    const searchbar = document.getElementById("searchbar");
    searchicon.style.width = "25%";
        searchbar.style.display = "inline";
});

searchicon.addEventListener("mouseleave", () => {
    const searchbar = document.getElementById("searchbar");
    searchbar.style.display = "none";
    searchicon.style.width = "5%";

});



const latest = document.getElementById("latest");
const popular = document.getElementById("popular");


popular.addEventListener("mouseover", () => {
 
    popular.style.cursor = "pointer";
});

popular.addEventListener("mouseleave", () => {
   
        popular.style.cursor = "default";
    
});



popular.addEventListener("click", () => {
    latest.style.backgroundColor = "rgb(243,243,243)";
    latest.style.color = "black";
    latest.style.opacity = "50%";

    popular.style.backgroundColor = "black";
    popular.style.opacity = "100%";
    popular.style.color = "white";
            
});



latest.addEventListener("mouseover", () => {
            
    latest.style.cursor = "pointer";
    
});

latest.addEventListener("mouseleave", () => {

        latest.style.cursor = "default";
    
});


latest.addEventListener("click", () => {
    latest.style.backgroundColor = "black";
    latest.style.color = "white";
    latest.style.opacity = "100%";

    popular.style.backgroundColor = "rgb(243,243,243)";
    popular.style.opacity = "50%";
    popular.style.color = "black";
     
});



