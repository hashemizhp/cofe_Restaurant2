$(".navbar-toggler").click(function(){
    if($(".nav-bg").css("display")=="none"){
       $(".nav-bg").css("display","block")
    }else{
     $(".nav-bg").css("display","none")
    }
    })
  
    $(".nav-bg").click(function(){
       $(".navbar-collapse").removeClass("show");
       $(".nav-bg").css("display","none");
       $(".navbar-toggler").addClass("collapsed");
  
    })

 $(".exit").click(function(){
     $(".navbar-collapse").removeClass("show");
     $(".nav-bg").css("display","none");
     $(".navbar-toggler").addClass("collapsed");
      
  })
  $(".form-show").click(function(){
    if($(".form-sign-in").css("display")=="none"){
       $(".form-sign-in").css("display","block")
       $(".nav-bg").css("display","block")
       $(".my-shopping").css("display","none")

    }else{
     $(".form-sign-in").css("display","none")
     $(".nav-bg").css("display","none")

    }
    })
    $(".nav-bg").click(function(){
      if($(".form-sign-in").css("display")=="block"){
         $(".form-sign-in").css("display","none")
         $(".nav-bg").css("display","none")
      }
      })
  $(".shopping-show").click(function(){
        if($(".my-shopping").css("display")=="none"){
           $(".my-shopping").css("display","block")
           $(".nav-bg").css("display","block")
           $(".form-sign-in").css("display","none")

        }else{
         $(".my-shopping").css("display","none")
         $(".nav-bg").css("display","none")
    
        }
        })
        $(".nav-bg").click(function(){
          if($(".my-shopping").css("display")=="block"){
             $(".my-shopping").css("display","none")
             $(".nav-bg").css("display","none")

          }
          })


   $("#pizza").click(function(){
   if($(".pizza").css("display")=="none"){
      $(".pizza").css("display","flex"),
      $(".sushi").css("display","none"),
      $(".salats").css("display","none"),
      $(".burger").css("display","none"),
      $(".dersest").css("display","none")
   }
   $("#pizza").addClass("active");
    $("#sushi").removeClass("active");
    $("#salats").removeClass("active");
    $("#burger").removeClass("active");
    $("#dersest").removeClass("active");
   })

 

$("#sushi").click(function(){
   if($(".sushi").css("display")=="none"){
      $(".sushi").css("display","flex"),
       $(".pizza").css("display","none"),
       $(".salats").css("display","none"),
       $(".burger").css("display","none"),
       $(".dersest").css("display","none")
   }
   $("#sushi").addClass("active");
   $("#pizza").removeClass("active");
   $("#salats").removeClass("active");
   $("#burger").removeClass("active");
   $("#dersest").removeClass("active");
   })

   $("#salats").click(function(){
      if($(".salats").css("display")=="none"){
         $(".salats").css("display","flex"),
          $(".pizza").css("display","none"),
          $(".sushi").css("display","none"),
          $(".burger").css("display","none"),
          $(".dersest").css("display","none")
      }
      $("#salats").addClass("active");
      $("#pizza").removeClass("active");
      $("#sushi").removeClass("active");
      $("#burger").removeClass("active");
      $("#dersest").removeClass("active");
      })


 $("#burger").click(function(){
         
     if($(".burger").css("display")=="none"){
        $(".burger").css("display","flex"),
        $(".pizza").css("display","none"),
        $(".salats").css("display","none"),
        $(".sushi").css("display","none"),
        $(".dersest").css("display","none")
         }
    $("#burger").addClass("active");
    $("#pizza").removeClass("active");
    $("#salats").removeClass("active");
    $("#sushi").removeClass("active");
    $("#dersest").removeClass("active");
   })

 $("#dersest").click(function(){          
   if($(".dersest").css("display")=="none"){
        $(".dersest").css("display","flex"),
        $(".pizza").css("display","none"),
        $(".salats").css("display","none"),
        $(".burger").css("display","none"),
        $(".sushi").css("display","none")
            }
    $("#dersest").addClass("active");
    $("#pizza").removeClass("active");
    $("#salats").removeClass("active");
    $("#burger").removeClass("active");
    $("#sushi").removeClass("active");
   })


   
$('.slider1').slick({
   dots: false,
   infinite: false,
   speed: 300,
   autoplay: true,
   autoplaySpeed: 3000,

   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow:'.prev-slider1',
   nextArrow:'.next-slider1',


   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
    
       
   ]
 });
 $('.slider2').slick({
   dots: false,
   infinite: false,
   speed: 300,
   autoplay: true,
   autoplaySpeed: 3000,

   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow:'.prev-slider1',
   nextArrow:'.next-slider1',


   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
    
       
   ]
 });