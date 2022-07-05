// Events Menu
const listIcon = document.querySelector(".list-icon");
const gridIcon = document.querySelector(".grid-icon");
const artistsContainer = document.querySelector(".artists-container");

// Hamburger Navigation
const toggleBtn = document.getElementById("mobile-menu-toggle");
const homeBody = document.getElementById("home");
const faIcon = document.getElementById("fa-icon");


// Toggle mobile menu
toggleBtn.onclick = function() {
    homeBody.classList.toggle("menu-active");
    faIcon.classList.toggle("fa-xmark");
};


// For the Grid and List buttons
listIcon.addEventListener("click", function() {
    artistsContainer.classList.add("list");
    gridIcon.classList.remove("active");
    listIcon.classList.add("active");
});

gridIcon.addEventListener("click", function() {
    artistsContainer.classList.remove("list");
    listIcon.classList.remove("active");
    gridIcon.classList.add("active");
});


// For the social Media Tabs
function openTab(event, socialName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("social-tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(socialName).style.display = "block";
    event.currentTarget.className += " active-tab";
  }

// Fire function to force List view on smaller screens while keeping previous configurations active
$(window).bind("resize", function () {
//    console.log($(this).width());
    if ($(this).width() < 1200) {
        $(".artists-container").addClass("force-list"); 
    } else {
        $(".artists-container").removeClass("force-list"); 
    } 
    
    // Also remove mobile navbar open if exited mobile
    if ($(this).width() >= 1200) {
        homeBody.classList.remove("menu-active");
        faIcon.classList.remove("fa-xmark");
    }
}).trigger('resize');