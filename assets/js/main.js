$(document).ready(function(){
  /*$(window).load(function() { $("#spinner").fadeOut("slow"); })*/
/*$('.scroll-container img').unveil(200);*/
	fullSizeImage();

  draw();

	// Scroll to category
	$('.nav a').click(function(){
		var cat = '.' + $(this).attr('class').replace(' active', '');
		var catPos = $('.scroll-container').find(cat).first();
		$('#scroller').stop().scrollTo(catPos,{duration:'slow'});

		$('#scroller img').fadeTo(0, 1);
		$('#scroller img').not(cat).fadeTo(0, .3);
    event.preventDefault();
		$('.nav a').removeClass('active');
		$(this).addClass('active');
	});
});

$('#scroller').scroll(function(){
	if($('#scroller .objects').first().offset().left < $(window).width() / 2){
		console.log('true')
	}
});




$(function() {
   $('#scroller').mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 1);
      event.preventDefault();
   });
});

function fullSizeImage(){
  $('#scroller img').on('click', function(e){
    e.preventDefault();

    $('#scroller img').removeClass('active');
    $(this).addClass('active');
    $('#can').addClass('blur');

    $('.description').css('display', 'block');
    $('.description').children().addClass('hide');
    $('#clear').css('display', 'inline-block');
    $('#clear').children().addClass('hide');
    $($(this).attr('href')).removeClass('hide');

    var alt = $(this).attr('alt');
    $('.description').html(alt);

    if($(this).hasClass('videos')){
      var video = $(this).data('video');
      $('.image-container').html('<video id="movie" controls><source src="imgs/videos/' + video + '.mov" type="video/mov">' +
        '<source src="imgs/videos/' + video + '.mp4" type="video/mp4">' +
        '<source src="imgs/videos/' + video + '.ogg" type="video/ogg"></video>');
    } else {
      var fullSize = $(this).data('full');
      $('.image-container').html('<img src="' + fullSize + '" />');
    }

  });
}




$("#clear").click(function(){
   $(".image-container img").hide();
   $(".image-container video").hide();
   $(".description").hide();
   $("#clear").hide();
   $("#scroller img").removeClass("active");
   $(".nav a").removeClass("active");
   $('#can').toggleClass('blur');
  });





$('body').on('click', '.image-container img', function(){
  $(this).toggleClass('full-size');
  $('.image-container img').unbind("hover");
  $('.bg-overlay').toggleClass('show');
 var loc = img.location.href; // returns the full URL
  $('.bg-overlay').addClass(loc);


});

 $(document).mouseup(function(event){
    var target = $('full-size');
    if(!target.is(event.target) && !$("full-size").is(event.target) && target.is(":visible")){
       $("full-size").fadeToggle("fast");
       $('#can').toggleClass('blur');
       $('.bg-overlay').toggleClass('show');
    }else{
      return false;
    }
});







$('body').on('click','nav a', function(e) {
    $('.image-container').css('display', 'block');
    $('.image-container').children().addClass('hide');
    $($(this).attr('href')).removeClass('hide');
    e.preventDefault();
});

var colors = Array("#F63800", "#8DC149", "#0AA480", "#F4C80F", "#334957", "#EFF3F7", "#70869B"), idx;
$(".big a").hover(function(){
  idx = Math.floor(Math.random() * colors.length); // Pick random index
  $(this).css("color",  colors[idx]);
  $(this).css("border-color",  colors[idx]);
  $(this).css("box-shadow-color",  colors[idx]);
}, function() {
  $(this).css("color", "#000");
  $(this).css("border-color", "#000");
  $(this).css("box-shadow-color", "#000");

});






  jQuery(function(){
      jQuery("#bio").click(function (e) {
        jQuery("#bio-text").toggle("medium");
        $('#can').toggleClass('blur');
         $('#clear2').css('display', 'inline-block');
        $('#clear2').children().addClass('hide');
        $($(this).attr('href')).removeClass('hide');
        e.preventDefault();

      });
    });


  $(document).mouseup(function(event){
    var target = $("#bio-text");
    if(!target.is(event.target) && !$("#bio").is(event.target) && target.is(":visible")){
       $("#bio-text").fadeToggle("fast");
       $('#can').toggleClass('blur');
    }else{
      return false;
    }
});


$("#clear2").click(function(){
   $("#bio").hide();
   $("#clear").hide();
   $('#can').toggleClass('blur');
  });




function hover(){
	$('#scroller img').on('hover', function(){
		var fullSize = $(this).data('full');

		$('#scroller img').removeClass('hover');
		$(this).addClass('hover');
		$('.image-container').html('<img src="' + fullSize + '" />');

	});
}

$('#can').css({width: $(window).width(), height: $(window).height()})


function draw(){

  var ctx = document.getElementById('can').getContext('2d');
  var W = 2000; var H = 2000;
  var randomnumber =Math.floor(Math.random()*200);
  var randspot =Math.floor(Math.random()*2000);
  var randspot2 =Math.floor(Math.random()*2000);
  var particles = [];
  for(var i = 0; i < 5; i++){
    particles.push(new create_particle());
  }

  function create_particle(){
    //Random position on the canvas
    this.x = Math.random()*W;
    this.y = Math.random()*H;

    //Lets add random velocity to each particle
    this.vx = Math.random()*10-15;
    this.vy = Math.random()*10+15;




    //Random size
    this.height = Math.random()*100+100;
  }

var x = 100; var y = 100;

  var colorz = Array("#F63800", "#8DC149", "#0AA480", "#F4C80F", "#334957", "#EFF3F7", "#70869B"), idx;
  idx = Math.floor(Math.random() * colors.length);
  this.color = colorz[idx];

 var colorz2 = Array("#F63800", "#8DC149", "#0AA480", "#F4C80F", "#334957", "#EFF3F7", "#70869B"), idx;
  idx2 = Math.floor(Math.random() * colors.length);
  this.color = colorz2[idx2];

 var colorz3 = Array("#F63800", "#8DC149", "#0AA480", "#F4C80F", "#334957", "#EFF3F7", "#70869B"), idx;
  idx3 = Math.floor(Math.random() * colors.length);
  this.color = colorz3[idx3];

 var colorz4 = Array("#F63800", "#8DC149", "#0AA480", "#F4C80F", "#334957", "#EFF3F7", "#70869B"), idx;
  idx4 = Math.floor(Math.random() * colors.length);
  this.color = colorz4[idx4];


//Lets animate the particle
function draw(){




  //Lets draw particles from the array now
  for(var t = 0; t < particles.length; t++)
  {
    var p = particles[t];


    /*ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fillRect(0, 0, 2000, 2000);
      */

    ctx.beginPath();

    ctx.globalCompositeOperation = "lighten";


    ctx.fillStyle = colorz[idx];
    ctx.rect(p.x, p.y, x, y);
    ctx.fill();


     ctx.fillStyle = colorz2[idx2];
     ctx.globalAlpha = 0.2;
     ctx.fillRect(p.x+randspot,randomnumber,x,y);



     ctx.fillStyle = colorz3[idx3];
     ctx.fillRect (p.x, p.y/2, x-randomnumber, y+x);


      ctx.fillStyle = colorz4[idx4];
      ctx.fillRect (p.x+randspot2, p.y*.5, x, y);


      ctx.fillStyle = colorz[idx];
      ctx.fillRect (p.x+randspot, p.y*.5, x, y+randomnumber);


      ctx.fillStyle = colorz2[idx2];
      ctx.fillRect (p.x+randspot, p.y, x, y);

      ctx.fillStyle = colorz3[idx3];
      ctx.fillRect (p.x+randspot2+randspot, p.y-.5, x, y-.2);




   /*
    p.x += p.vx;
    p.y += p.vy;
    */

    //To prevent the balls from moving out of the canvas
    if(p.x < -2000) p.x = W+2000;
    if(p.y < -2000) p.y = H+2000;
    if(p.x > W+2000) p.x = -2000;
    if(p.y > H+2000) p.y = -2000;
  }
}



var startDraw = setInterval(draw, 100);
setTimeout(function(){clearInterval(startDraw)},1200);


}



