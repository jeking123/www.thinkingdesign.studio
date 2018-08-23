//initiate mixitup
var mixer = mixitup(".grid", {
    selectors: {
        target: '.grid-item'
    },
    load: {
        sort: 'random'
    }
});

//initiate masonry on call of class function-allows function to be called inside of other actions, resetting masonry.
function masonryGrid(){
    var $container = $('.grid');
    // initialize
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      fitWidth: true
    });
}

//run masonry
masonryGrid();

//Apply a randome class to each grid-item to determine size
$(document).ready(function(){
    var classes = ["sm-square", "sm-square", "lg-square"];
    //var classes = ["sm-square","sm-square","sm-square","wide","tall", "lg-square"];

    $("#grid .grid-item").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
    masonryGrid();
});