const container = document.querySelector(".container");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const santa = document.querySelector(".santa");
const tree = document.querySelector(".tree");

container.addEventListener("mousemove", (rotate) => {
    let x = (innerWidth / 2 - rotate.pageX) / 15;
    let y = (innerHeight / 2 - rotate.pageY) / 15;

    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
})

container.addEventListener("mouseover", () =>{
    title.style.transform = "translate3d(0, 0, 160px)";
    santa.style.transform = "translate3d(0, 0, 220px)";
    tree.style.transform = "translate3d(0, 0, 120px)";
    card.style.transition = "all 0.1s ease";
})


container.addEventListener("mouseout", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translate3d(0, 0, 0)";
    santa.style.transform = "translate3d(0, 0, 0)";
    tree.style.transform = "translate3d(0, 0, 0)";
})

