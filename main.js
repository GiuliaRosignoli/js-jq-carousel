// Slider


$(document).ready(function(){

// Needed variables

var prevBtn = $(".prev"); // Left arrow  <

var nextBtn = $(".next"); // Right arrow  >



// Next
nextBtn.click(function(){
    nextPrevSlidev("next");  // Invoking the function previously created with
                             // "next" as a parametre
})


// Prev

prevBtn.click(function(){
    nextPrevSlidev("prev"); // Invoking the function previously created with
                            // "prev" as a parametre
})


    //End doc ready
});





/*******************************************************
 *          Functions
 * 
 *******************************************************/

function nextPrevSlidev (direction) {
    var activeImage = $(".images img.active"); // This is the image that currently has "active" class
    var activeCircle = $(".nav i.active"); // Same as above

    // Reset
    activeImage.removeClass("active"); // Don't want two active classes so I'm removing one of them
    activeCircle.removeClass("active"); //Same as above

    // Next

    if(direction === "next"){

        if(activeImage.hasClass("last")){

            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");

        } else

        activeImage.next("img").addClass("active");
        activeCircle.next("i").addClass("active");
    }

    // Prev
        else if(direction === "prev") {
            if(activeImage.hasClass("first")){
                $("images img.last").addClass("active");
                $(".nav i.last").addClass("active");

            } else {
                activeImage.prev("img").addClass("active");
                activeCircle.prev("i").addClass("active");
            }
    } 
}