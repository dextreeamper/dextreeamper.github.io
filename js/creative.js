/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Show arrows navigation after 6secs
    function toggleDiv() {
        setTimeout(function () {
            $("<style>")
                .prop("type", "text/css")
                .html("\
                #content--arrows {\
                    visibility: visible;\
                }")
                .appendTo("head");
        }, 6000);
    }
    toggleDiv();

    // // Get the modal
    // var modal = document.getElementById("myModal");
    //
    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");
    //
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    //
    // // When the user clicks the button, open the modal
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // };
    //
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // };
    //
    // // When the user clicks anywhere outside of the modal, close it
    // // window.onclick = function(event) {
    // //     if (event.target == modal) {
    // //         modal.style.display = "none";
    // //     }
    // // };
    //
    // // Get the modal
    // var modalTwo = document.getElementById("myModalTwo");
    //
    // // Get the button that opens the modal
    // var btnTwo = document.getElementById("myBtnTwo");
    //
    // // Get the <span> element that closes the modal
    // var span_two = document.getElementsByClassName("close-two")[0];
    //
    // // When the user clicks the button, open the modal
    // btnTwo.onclick = function() {
    //     modalTwo.style.display = "block";
    // };
    //
    // // When the user clicks on <span> (x), close the modal
    // span_two.onclick = function() {
    //     modalTwo.style.display = "none";
    // };
    // //
    // // // When the user clicks anywhere outside of the modal, close it
    // // window.onclick = function(event) {
    // //     if (event.target == modalTwo) {
    // //         modalTwo.style.display = "none";
    // //     }
    // // };
    //
    // // Get the modal
    // var modalThree = document.getElementById("myModalThree");
    //
    // // Get the button that opens the modal
    // var btnThree = document.getElementById("myBtnThree");
    //
    // // Get the <span> element that closes the modal
    // var span_three = document.getElementsByClassName("close-three")[0];
    //
    // // When the user clicks the button, open the modal
    // btnThree.onclick = function() {
    //     modalTwo.style.display = "block";
    // };
    //
    // // When the user clicks on <span> (x), close the modal
    // span_three.onclick = function() {
    //     modalThree.style.display = "none";
    // };



})(jQuery); // End of use strict
