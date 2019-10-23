$(document).ready(function() {
    $(".btn1").click(function(){
        $("img, h2, h3, p, h1, button").fadeOut();
    });
    $(".btn2").click(function(){
        $("div").fadeIn();
          });
          $(".clickable").click(function() {
              $("#walrus-showing").toggle();
              $("#walrus-hidden").toggle()
            });
        });
