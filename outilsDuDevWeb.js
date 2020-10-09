/***CAROUSEL-01***/

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
        currentPosition1.css("background-color", "#F82360");
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
            currentPosition1.css("background-color", "#F82360");
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
            currentPosition1.css("background-color", "#F82360");
        } else {
            i1 = indexImg1;
        }
    }
);
/***CAROUSEL-02***/

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
        currentPosition2.css("background-color", "#F82360");
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
            currentPosition2.css("background-color", "#F82360");
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
            currentPosition2.css("background-color", "#F82360");
        } else {
            i2 = indexImg2;
        }
    }
);
/***CAROUSEL-03***/

//Récupération des éléments du DOM
const carouselItem3 = $(".carousel-item-3");
const buttonPrev3 = $("#button-prev-3");
const buttonNext3 = $("#button-next-3");
const position3 = $(".carousel-position-3");

//Initialisation des variables
let indexImg3 = carouselItem3.length - 1;
let i3 = 0;
let currentImg3 = carouselItem3.eq(i3);
let currentPosition3 = position3.eq(i3);

$(document).ready(function($)
    {
        carouselItem3.css("display", "none");
        currentImg3.css("display", "block");
        currentPosition3.css("background-color", "#F82360");
    }
);
$(buttonPrev3).click(function()
    {
        i3--;
        if (i3 >= 0) {
            carouselItem3.css("display", "none");
            currentImg3 = carouselItem3.eq(i3);
            currentImg3.css("display", "block");

            currentPosition3.css("background-color", "#222");
            currentPosition3 = position3.eq(i3);
            currentPosition3.css("background-color", "#F82360");
        } else {
            i3 = 0;
        }
    }   
);
$(buttonNext3).click(function()
    {
        i3++;
        if (i3 <= indexImg3) {
            carouselItem3.css("display", "none");
            currentImg3 = carouselItem3.eq(i3);
            currentImg3.css("display", "block");

            currentPosition3.css("background-color", "#222");
            currentPosition3 = position3.eq(i3);
            currentPosition3.css("background-color", "#F82360");
        } else {
            i3 = indexImg3;
        }
    }
);
/***CAROUSEL-04***/

//Récupération des éléments du DOM
const carouselItem4 = $(".carousel-item-4");
const buttonPrev4 = $("#button-prev-4");
const buttonNext4 = $("#button-next-4");
const position4 = $(".carousel-position-4");

//Initialisation des variables
let indexImg4 = carouselItem4.length - 1;
let i4 = 0;
let currentImg4 = carouselItem4.eq(i4);
let currentPosition4 = position4.eq(i4);

$(document).ready(function($)
    {
        carouselItem4.css("display", "none");
        currentImg4.css("display", "block");
        currentPosition4.css("background-color", "#F82360");
    }
);
$(buttonPrev4).click(function()
    {
        i4--;
        if (i4 >= 0) {
            carouselItem4.css("display", "none");
            currentImg4 = carouselItem4.eq(i4);
            currentImg4.css("display", "block");

            currentPosition4.css("background-color", "#222");
            currentPosition4 = position4.eq(i4);
            currentPosition4.css("background-color", "#F82360");
        } else {
            i4 = 0;
        }
    }   
);
$(buttonNext4).click(function()
    {
        i4++;
        if (i4 <= indexImg4) {
            carouselItem4.css("display", "none");
            currentImg4 = carouselItem4.eq(i4);
            currentImg4.css("display", "block");

            currentPosition4.css("background-color", "#222");
            currentPosition4 = position4.eq(i4);
            currentPosition4.css("background-color", "#F82360");
        } else {
            i4 = indexImg4;
        }
    }
);
/***CAROUSEL-05***/

//Récupération des éléments du DOM
const carouselItem5 = $(".carousel-item-5");
const buttonPrev5 = $("#button-prev-5");
const buttonNext5 = $("#button-next-5");
const position5 = $(".carousel-position-5");

//Initialisation des variables
let indexImg5 = carouselItem5.length - 1;
let i5 = 0;
let currentImg5 = carouselItem5.eq(i5);
let currentPosition5 = position5.eq(i5);

$(document).ready(function($)
    {
        carouselItem5.css("display", "none");
        currentImg5.css("display", "block");
        currentPosition5.css("background-color", "#F82360");
    }
);
$(buttonPrev5).click(function()
    {
        i5--;
        if (i5 >= 0) {
            carouselItem5.css("display", "none");
            currentImg5 = carouselItem5.eq(i5);
            currentImg5.css("display", "block");

            currentPosition5.css("background-color", "#222");
            currentPosition5 = position5.eq(i5);
            currentPosition5.css("background-color", "#F82360");
        } else {
            i5 = 0;
        }
    }   
);
$(buttonNext5).click(function()
    {
        i5++;
        if (i5 <= indexImg5) {
            carouselItem5.css("display", "none");
            currentImg5 = carouselItem5.eq(i5);
            currentImg5.css("display", "block");

            currentPosition5.css("background-color", "#222");
            currentPosition5 = position5.eq(i5);
            currentPosition5.css("background-color", "#F82360");
        } else {
            i5 = indexImg5;
        }
    }
);
/***CAROUSEL-06***/

//Récupération des éléments du DOM
const carouselItem6 = $(".carousel-item-6");
const buttonPrev6 = $("#button-prev-6");
const buttonNext6 = $("#button-next-6");
const position6 = $(".carousel-position-6");

//Initialisation des variables
let indexImg6 = carouselItem6.length - 1;
let i6 = 0;
let currentImg6 = carouselItem6.eq(i6);
let currentPosition6 = position6.eq(i6);

$(document).ready(function($)
    {
        carouselItem6.css("display", "none");
        currentImg6.css("display", "block");
        currentPosition6.css("background-color", "#F82360");
    }
);
$(buttonPrev6).click(function()
    {
        i6--;
        if (i6 >= 0) {
            carouselItem6.css("display", "none");
            currentImg6 = carouselItem6.eq(i6);
            currentImg6.css("display", "block");

            currentPosition6.css("background-color", "#222");
            currentPosition6 = position6.eq(i6);
            currentPosition6.css("background-color", "#F82360");
        } else {
            i6 = 0;
        }
    }   
);
$(buttonNext6).click(function()
    {
        i6++;
        if (i6 <= indexImg6) {
            carouselItem6.css("display", "none");
            currentImg6 = carouselItem6.eq(i6);
            currentImg6.css("display", "block");

            currentPosition6.css("background-color", "#222");
            currentPosition6 = position6.eq(i6);
            currentPosition6.css("background-color", "#F82360");
        } else {
            i6 = indexImg6;
        }
    }
);
/***CAROUSEL-07***/

//Récupération des éléments du DOM
const carouselItem7 = $(".carousel-item-7");
const buttonPrev7 = $("#button-prev-7");
const buttonNext7 = $("#button-next-7");
const position7 = $(".carousel-position-7");

//Initialisation des variables
let indexImg7 = carouselItem7.length - 1;
let i7 = 0;
let currentImg7 = carouselItem7.eq(i7);
let currentPosition7 = position7.eq(i7);

$(document).ready(function($)
    {
        carouselItem7.css("display", "none");
        currentImg7.css("display", "block");
        currentPosition7.css("background-color", "#F82360");
    }
);
$(buttonPrev7).click(function()
    {
        i7--;
        if (i7 >= 0) {
            carouselItem7.css("display", "none");
            currentImg7 = carouselItem7.eq(i7);
            currentImg7.css("display", "block");

            currentPosition7.css("background-color", "#222");
            currentPosition7 = position7.eq(i7);
            currentPosition7.css("background-color", "#F82360");
        } else {
            i7 = 0;
        }
    }   
);
$(buttonNext7).click(function()
    {
        i7++;
        if (i7 <= indexImg7) {
            carouselItem7.css("display", "none");
            currentImg7 = carouselItem7.eq(i7);
            currentImg7.css("display", "block");

            currentPosition7.css("background-color", "#222");
            currentPosition7 = position7.eq(i7);
            currentPosition7.css("background-color", "#F82360");
        } else {
            i7 = indexImg7;
        }
    }
);
/***CAROUSEL-08***/

//Récupération des éléments du DOM
const carouselItem8 = $(".carousel-item-8");
const buttonPrev8 = $("#button-prev-8");
const buttonNext8 = $("#button-next-8");
const position8 = $(".carousel-position-8");

//Initialisation des variables
let indexImg8 = carouselItem8.length - 1;
let i8 = 0;
let currentImg8 = carouselItem8.eq(i8);
let currentPosition8 = position8.eq(i8);

$(document).ready(function($)
    {
        carouselItem8.css("display", "none");
        currentImg8.css("display", "block");
        currentPosition8.css("background-color", "#F82360");
    }
);
$(buttonPrev8).click(function()
    {
        i8--;
        if (i8 >= 0) {
            carouselItem8.css("display", "none");
            currentImg8 = carouselItem8.eq(i8);
            currentImg8.css("display", "block");

            currentPosition8.css("background-color", "#222");
            currentPosition8 = position8.eq(i8);
            currentPosition8.css("background-color", "#F82360");
        } else {
            i8 = 0;
        }
    }   
);
$(buttonNext8).click(function()
    {
        i8++;
        if (i8 <= indexImg8) {
            carouselItem8.css("display", "none");
            currentImg8 = carouselItem8.eq(i8);
            currentImg8.css("display", "block");

            currentPosition8.css("background-color", "#222");
            currentPosition8 = position8.eq(i8);
            currentPosition8.css("background-color", "#F82360");
        } else {
            i8 = indexImg8;
        }
    }
);
/***CAROUSEL-09***/

//Récupération des éléments du DOM
const carouselItem9 = $(".carousel-item-9");
const buttonPrev9 = $("#button-prev-9");
const buttonNext9 = $("#button-next-9");
const position9 = $(".carousel-position-9");

//Initialisation des variables
let indexImg9 = carouselItem9.length - 1;
let i9 = 0;
let currentImg9 = carouselItem9.eq(i9);
let currentPosition9 = position9.eq(i9);

$(document).ready(function($)
    {
        carouselItem9.css("display", "none");
        currentImg9.css("display", "block");
        currentPosition9.css("background-color", "#F82360");
    }
);
$(buttonPrev9).click(function()
    {
        i9--;
        if (i9 >= 0) {
            carouselItem9.css("display", "none");
            currentImg9 = carouselItem9.eq(i9);
            currentImg9.css("display", "block");

            currentPosition9.css("background-color", "#222");
            currentPosition9 = position9.eq(i9);
            currentPosition9.css("background-color", "#F82360");
        } else {
            i9 = 0;
        }
    }   
);
$(buttonNext9).click(function()
    {
        i9++;
        if (i9 <= indexImg9) {
            carouselItem9.css("display", "none");
            currentImg9 = carouselItem9.eq(i9);
            currentImg9.css("display", "block");

            currentPosition9.css("background-color", "#222");
            currentPosition9 = position9.eq(i9);
            currentPosition9.css("background-color", "#F82360");
        } else {
            i9 = indexImg9;
        }
    }
);