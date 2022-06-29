const list = document.querySelector(".list-icon");
const grid = document.querySelector(".grid-icon");
const artistsContainer = document.querySelector(".artists-container");


list.addEventListener("click", function() {
    artistsContainer.classList.add("list");
    grid.classList.remove("active");
    list.classList.add("active");
});

grid.addEventListener("click", function() {
    artistsContainer.classList.remove("list");
    list.classList.remove("active");
    grid.classList.add("active");
});