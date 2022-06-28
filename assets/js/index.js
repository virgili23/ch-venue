const list = document.querySelector(".list-icon");
const grid = document.querySelector(".grid-icon");
const ltg = document.querySelector(".ltg");


list.addEventListener("click", function() {
    ltg.classList.add("list");
    grid.classList.remove("active");
    list.classList.add("active");
});

grid.addEventListener("click", function() {
    ltg.classList.remove("list");
    list.classList.remove("active");
    grid.classList.add("active");
});