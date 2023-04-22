//*** landing page changing text ***/
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "content designer", "marketer", "foodie", "technical writer"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#aboutmechangingtext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100); 
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

//*** navbar home appearing  ****/
//http://jsfiddle.net/dylanholmes222/LaL3v/1/ // 

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('.landing-page-title');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#home-link').css('color', '#5784C7');
      } else {
         $('#home-link').css('color', 'white');
      }
  });
});

//*** about link scroll  ***//

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#home-finish');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#about-link').css({"color": "#5784C7", "border-bottom": "solid 3px #5784C7"});
      } else {
         $('#about-link').css({"color": "#99c2ff", "border-bottom": "none"});
      }
  });
});

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#about-finish');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#about-link').css({"color": "#99c2ff", "border-bottom": "none"});
      }
  });
});

//*** experience link scroll  ***/

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#about-finish');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#experience-link').css({"color": "#5784C7", "border-bottom": "solid 3px #5784C7"});
      } else {
         $('#experience-link').css({"color": "#99c2ff", "border-bottom": "none"});
      }
  });
});

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#experience-finish');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#experience-link').css({"color": "#99c2ff", "border-bottom": "none"});
      }
  });
});

//*** contact link scroll ***//

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#experience-finish');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#contact-link').css({"color": "#5784C7", "border-bottom": "solid 3px #5784C7"});
      } else {
         $('#contact-link').css({"color": "#99c2ff", "border-bottom": "none"});
      }
  });
});

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#contact-finish');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $('#contact-link').css({"color": "#99c2ff", "border-bottom": "none"});
      }
  });
});
//**** experience tab container *****//

$(document).ready(function(){
        
  $(".tabs-list li a").click(function(e){
     e.preventDefault();
  });

  $(".tabs-list li").click(function(){
     var tabid = $(this).find("a").attr("href");
     $(".tabs-list li,.tabs div.tab").removeClass("active");   // removing active class from tab
     $(".tab").hide();   // hiding open tab
     $(tabid).show();    // show tab
     console.log(tabid)
     $(this).addClass("active"); //  adding active class to clicked tab

  });

});

// playground photo gallery 

