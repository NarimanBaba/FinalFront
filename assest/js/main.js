

  
  $(document).ready(function () {
    

    //********************************************************//
      // **************     Nav Scrool   ********************
      //*********************************************************//
    let nav = document.querySelector(".header-bottom");
    
    let searchForm =document.querySelector(".search-formc");
    let searchBar =document.querySelector(".search-bar");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 60) {
        nav.classList.add("nav-scroll");
        searchForm.classList.add("scroll");
      } else {
        nav.classList.remove("nav-scroll");
        searchForm.classList.remove("scroll");
      }
    });

    searchBar.addEventListener("click",function () {
      if(!this.classList.contains("active")){
 
        this.classList.add("active")
        searchForm.classList.add("active")

      }
      else{
        this.classList.remove("active")
        searchForm.classList.remove("active")
      }
      
    })

      //********************************************************//
      // **************     Mobile menu Show   ********************
      //*********************************************************//
    $(".mob-nav").click(function () {
      $("#mobile-menu").slideToggle(400);
      if ($(".mob-nav i").hasClass("fa-bars")) {
        $(".mob-nav i").removeClass("fa-bars");
        $(".mob-nav i").addClass("fa-times");
      } else {
        $(".mob-nav i").removeClass("fa-times");
        $(".mob-nav i").addClass("fa-bars");
      }
    });
     

     //********************************************************//
      // **************     Mobile Children Show   ********************
      //*********************************************************//
        $(".mean-expand").click(function () {
          $(this).parent().next().children().slideToggle(400);
           if ($(this).children().hasClass("fa-plus") ) {
        
         $(this).children().addClass("fa-minus")
         $(this).children().removeClass("fa-plus")
       } else {
         $(this).children().removeClass("fa-minus")
         $(this).children().addClass("fa-plus")
      }
        });


        //********************************************************//
      // **************     Mobile Children Icon   ********************
      //*********************************************************//
      $(".mean-expand").click(function () {
          if ($(".mean-expand").hasClass("active") ) {
         $(".mean-expand").removeClass("active")
       } 
         $(this).addClass("active")
    });
    });

