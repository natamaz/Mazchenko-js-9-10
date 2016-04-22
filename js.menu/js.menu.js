/**
 * Created by НАФТУСЯ on 21.04.2016.
 */
$('.dropdown').hover(mouseIn, mouseOut);

function mouseIn(){
    $(this).children('.sub-menu').slideDown(200);
};

function mouseOut(){
    $(this).children('.sub-menu').slideUp(200);
};



