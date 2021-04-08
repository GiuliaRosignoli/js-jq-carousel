// Slider


$(document).ready(function(){

// Needed variables

var prevBtn = $(".prev"); // Left arrow <

var nextBtn = $(".next"); // Right arrow >



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


    // Keyboard Navigation
$(document).keydown(function(event){
    console.log("Click using a keyboard!");
    console.log(event.keyCode); //What button have I pressed? 
                                // Each one has a different number so I can recognize them

    if(event.keyCode === 37) {
        nextPrevSlidev("prev");
    } else if 
        (event.keyCode === 39) {
         nextPrevSlidev("next");
        }
    
});


    //End doc ready
});





/*******************************************************
 *          Functions
 * 
 *******************************************************/


function nextPrevSlidev (direction) { // ---> direction is my parametre
    var activeImage = $(".images img.active"); // This is the image that currently has "active" class
    var activeCircle = $(".nav i.active"); // Same as above (icon)

    // Reset
    activeImage.removeClass("active"); // Don't want two active classes so I'm removing one of them
    activeCircle.removeClass("active"); //Same as above (icon)

    // Next - Right arrow >

    if(direction === "next"){ //If my parametre is equal to "next"
            // If so...

        if(activeImage.hasClass("last")) { //Have I reached the end of my list?

            $(".images img.first").addClass("active"); //img.first - first item of the list - it's possible to create a variable containing it as well
            $(".nav i.first").addClass("active"); //same as above (icon)

        } else

        activeImage.next("img").addClass("active");
        activeCircle.next("i").addClass("active");
    }

    // Prev -  Left arrow <

        else if(direction === "prev") { // If my parametre is equal to "prev"
            if(activeImage.hasClass("first")){
                $(".images img.last").addClass("active");
                $(".nav i.last").addClass("active");

            } else {
                activeImage.prev("img").addClass("active");
                activeCircle.prev("i").addClass("active");
            }
    } 
}