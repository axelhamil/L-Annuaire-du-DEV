//Récupération des éléments du DOM
const carouselItem = $(".carousel-item");
const buttonPrev = $("#button-prev");
const buttonNext = $("#button-next");
const position = $(".carousel-position");
const info = $(".card-info");

//Initialisation des variables
let indexImg = carouselItem.length - 1;
let i = indexImg/2;
let currentImg = carouselItem.eq(i);
let currentPosition = position.eq(i);

$(document).ready(function($)
    {
        carouselItem.css("display", "none");
        currentImg.css("display", "block");
        currentPosition.css("background-color", "#E2B731");
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

            currentPosition.css("background-color", "lightgray");
            currentPosition = position.eq(i);
            currentPosition.css("background-color", "#E2B731");
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

            currentPosition.css("background-color", "lightgray");
            currentPosition = position.eq(i);
            currentPosition.css("background-color", "#E2B731");
        } else {
            i = indexImg;
        }
    }
);
$(info).mouseenter(function()
    {
        info.css("background-color", "#E2B731");
        info.css("height", "200px");
    }
);
$(info).mouseleave(function()
    {
        info.css("background-color", "lightgray");
        info.css("height", "50px");
    }
);