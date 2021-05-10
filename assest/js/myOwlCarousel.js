  
  $(document).ready(function () {
    //********************************************************//
    // **************    Owl Carousellll    ********************
    //*********************************************************//
  $(".owl-carousel").owlCarousel({ 
      loop:true,
      nav:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 2500,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      onDragged: animateCallback,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  let prevEl =document.querySelector(".owl-prev");
  let nextEl =document.querySelector(".owl-next");
  var owlItem = document.querySelectorAll(".owl-item");
  function animateCallback(event) {
      owlItem.forEach(e => 
                {if(e.classList.contains("active")){
                e.children[0].children[0].classList.add("animate__fadeInUp")
           }else{
              e.children[0].children[0].classList.remove("animate__fadeInUp")
           }
          }
     );
  }
      prevEl.addEventListener("click",function(){
          animateCallback()
      })
      nextEl.addEventListener("click",function(){
          animateCallback()
      })
    });