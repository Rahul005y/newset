let img = document.querySelector("img");
let love = document.querySelector(".ri-heart-3-fill");
let lovebtn = document.querySelector(".ri-heart-fill.smallheart");

lovebtn.addEventListener("click", function () {

    let randomX = Math.floor(Math.random() * 100) - 50;
    let randomRotate = Math.floor(Math.random() * 120) - 60;

    // START
    love.style.opacity = 1;
    love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

    // MOVE UP RANDOM
    setTimeout(() => {
        love.style.opacity = 0;
        love.style.transform =
            `translate(${randomX}px, -200px) scale(1) rotate(${randomRotate}deg)`;
    }, 300);

    // RESET
    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 700);

    setTimeout(() => {
        lovebtn.classList.toggle("smallheart")
    }, 2000);
});
