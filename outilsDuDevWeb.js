const carouselItems = $(".carousel-items");
const carouselItem = $(".carousel-item");
const buttonPrev = $("#button-prev");
const buttonNext = $("#button-next");

let i = 0;
let indexImg = carouselItem.length - 1;
let currentImg = carouselItem.eq(i);

$(document).ready(function($)
    {
        carouselItem.css("display", "none");
        currentImg.css("display", "block");
    }
);
$(buttonPrev).click(function()
    {
        i--;
        if (i >= 0) {
            carouselItem.css("display", "none");
            currentImg = carouselItem.eq(i);
            currentImg.css("display", "block");
            console.log("buttonPrev");
        } else {
            i = 0;
        }
    }   
);
$(buttonNext).click(function()
    {
        i++;
        if (i <= indexImg) {
            carouselItem.css("display", "none");
            currentImg = carouselItem.eq(i);
            currentImg.css("display", "block");
            console.log("buttonNext");
        } else {
            i = indexImg;
        }
    }
);