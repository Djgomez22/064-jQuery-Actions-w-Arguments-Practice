// Guided Practice
$(".reply-yes").click(function() {  
    $(".homers-reply").text("Woo Hoo!");
    $(".reply-yes").css("background-color", "yellow");
    $("body").css("background-color", "pink");
    $(".homer").hide();
    $(".homerd").show();
});

//Independent Practice
$(".reply-no").click(function() { 
    $(".homers-reply").text("Doh!");
     $(".reply-no").css("background-color","red");
    $("body").css("background-color", "red");
   $(".homer").hide();
   $(".homermad").show();
     
      
    
});

