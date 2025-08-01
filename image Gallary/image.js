let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scollBehavior = "auto"
});
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
});