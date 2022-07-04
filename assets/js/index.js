const listIcon = document.querySelector(".list-icon");
const gridIcon = document.querySelector(".grid-icon");
const artistsContainer = document.querySelector(".artists-container");


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


// function resize() {
//     if ( ($(window).innerWidth() < 1199) && (!(artistsContainer.classList.contains(".list"))) ) {
//         if (!gridIcon.classList.contains(".active")) {
//             gridIcon.classList.remove("active");
//             listIcon.classList.add("active");
//         }
//         artistsContainer.classList.add("list");

//     } else if (($(window).innerWidth() >= 1200) && (!(artistsContainer.classList.contains(".list")))) {
//         if (!listIcon.classList.contains(".active")) {
//             listIcon.classList.remove("active");
//             gridIcon.classList.add("active");
//         }
//         artistsContainer.classList.remove("list");
//     }
// }

// function resize() {
//     if ( ($(window).innerWidth() < 1200) ) {
//         if (!artistsContainer.classList.contains("force-list")) {
//             artistsContainer.classList.add("force-list");
//         } else {
//             artistsContainer.classList.remove("force-list");
//         }
//     } 
// }
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

$(window).bind("resize", function () {
//    console.log($(this).width());
    if ($(this).width() < 1200) {
        $(".artists-container").addClass("force-list"); 
    } else {
        $(".artists-container").removeClass("force-list"); 
    }    
}).trigger('resize');