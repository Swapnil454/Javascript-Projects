

let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.querySelector("#originalImg");
let line = document.querySelector("#line");

// Set the initial width of the original image to match the imgBox width
originalImg.style.width = imgBox.offsetWidth + "px";

// Calculate the left offset of the imgBox relative to the viewport
let leftSpace = imgBox.getBoundingClientRect().left;

imgBox.onmousemove = function(e) {
    // Calculate the new width of the imgWrap based on mouse position
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
