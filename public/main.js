function updateQuote(){
    $.ajax({
        url : "/api/quote",
        method: "GET"
    })
    .done(function(data){
        var randomBgNumber = 1 + Math.floor(Math.random() * 9);
        $(".wrapper").css("background-image","url('images/bg-"+randomBgNumber+".jpg')");
        $("#quote-text-id").text(data.Quote);
        $("#quote-author-id").text(data.Author);

    })
    .fail(function(textstatus,jqXHR){
        console.log("response of ajax is bad");
        console.log(textstatus);
        alert(textstatus.responseJSON.error);
    })
}

$(document).ready(function(){
    updateQuote();
    $(document).on("click", function(){
        // alert("i am clicked");
        updateQuote();
    })

     $(document).on("mousemove", function(e){
         createSprinkle(e.pageX, e.pageY);
    })

    
});


function createSprinkle(x,y){
    
      const $sprinkle = $('<div>');
    $sprinkle.addClass('sprinkle');
      const colors = ['red', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  $sprinkle.addClass(randomColor);

    // 4. Set random size (between 4px and 10px)
  const size = Math.random() * 6 + 4;
  $sprinkle.css({
    'width': `${size}px`,
    'height': `${size}px`
  });
   // 5. Position it at cursor
  $sprinkle.css({
    'left': `${x}px`,
    'top': `${y}px`
  });
    $sprinkle.css('animation', 'sprinkle-fade 0.6s ease-out forwards');
  $('body').append($sprinkle);


    // 8. Remove from DOM after animation completes
  setTimeout(() => {
    $sprinkle.remove();
  }, 600); // Match this with animation duration
}



