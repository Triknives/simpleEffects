$(document).ready(function() {
    $(".btn1").click(function(){
        $("img, h3, h2, button").fadeOut();
    });
    $(".btn2").click(function(){
        $("img").fadeIn();
          });
          $(".clickable").click(function() {
              $("#walrus-showing").toggle();
              $("#walrus-hidden").toggle();
            });
        });
