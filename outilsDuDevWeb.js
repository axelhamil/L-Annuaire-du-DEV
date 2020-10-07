/**FIRST CAROUSEL */

//Récupération des éléments du DOM
const carouselItem1 = $(".carousel-item-1");
const buttonPrev1 = $("#button-prev-1");
const buttonNext1 = $("#button-next-1");
const position1 = $(".carousel-position-1");

//Initialisation des variables
let indexImg1 = carouselItem1.length - 1;
let i1 = 0;
let currentImg1 = carouselItem1.eq(i1);
let currentPosition1 = position1.eq(i1);

$(document).ready(function($)
    {
        carouselItem1.css("display", "none");
        currentImg1.css("display", "block");
        currentPosition1.css("background-color", "#E2B731");
    }
);
$(buttonPrev1).click(function()
    {
        i1--;
        if (i1 >= 0) {
            carouselItem1.css("display", "none");
            currentImg1 = carouselItem1.eq(i1);
            currentImg1.css("display", "block");

            currentPosition1.css("background-color", "#222");
            currentPosition1 = position1.eq(i1);
            currentPosition1.css("background-color", "#E2B731");
        } else {
            i1 = 0;
        }
    }   
);
$(buttonNext1).click(function()
    {
        i1++;
        if (i1 <= indexImg1) {
            carouselItem1.css("display", "none");
            currentImg1 = carouselItem1.eq(i1);
            currentImg1.css("display", "block");

            currentPosition1.css("background-color", "#222");
            currentPosition1 = position1.eq(i1);
            currentPosition1.css("background-color", "#E2B731");
        } else {
            i1 = indexImg1;
        }
    }
);/*
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
);*/

/**SECOND CAROUSEL */

//Récupération des éléments du DOM
const carouselItem2 = $(".carousel-item-2");
const buttonPrev2 = $("#button-prev-2");
const buttonNext2 = $("#button-next-2");
const position2 = $(".carousel-position-2");

//Initialisation des variables
let indexImg2 = carouselItem2.length - 1;
let i2 = 0;
let currentImg2 = carouselItem2.eq(i2);
let currentPosition2 = position2.eq(i2);

$(document).ready(function($)
    {
        carouselItem2.css("display", "none");
        currentImg2.css("display", "block");
        currentPosition2.css("background-color", "#E2B731");
    }
);
$(buttonPrev2).click(function()
    {
        i2--;
        if (i2 >= 0) {
            carouselItem2.css("display", "none");
            currentImg2 = carouselItem2.eq(i2);
            currentImg2.css("display", "block");

            currentPosition2.css("background-color", "#222");
            currentPosition2 = position2.eq(i2);
            currentPosition2.css("background-color", "#E2B731");
        } else {
            i2 = 0;
        }
    }   
);
$(buttonNext2).click(function()
    {
        i2++;
        if (i2 <= indexImg2) {
            carouselItem2.css("display", "none");
            currentImg2 = carouselItem2.eq(i2);
            currentImg2.css("display", "block");

            currentPosition2.css("background-color", "#222");
            currentPosition2 = position2.eq(i2);
            currentPosition2.css("background-color", "#E2B731");
        } else {
            i2 = indexImg2;
        }
    }
);