$(":root").css("background", "black");

var swiper = new Swiper(".best", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".att", {
  slidesPerView: 1.8,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let tabButtons = document.querySelectorAll('.tabButton');
Array.from(tabButtons).forEach((eachBotton, index)=>{
  eachBotton.addEventListener('click', function() {
      let tabBoxs = document.querySelectorAll('.tabBox');
      for (var i = 0; i < tabBoxs.length; i++) {
          tabBoxs[i].classList.remove("on");
          tabButtons[i].classList.remove("on");            
      }
      tabBoxs[index].classList.add("on");
      this.classList.add("on");
  })
});
  tabButtons[0].click();


  $(function() {
    // 메뉴클릭시 하위메뉴 슬라이드 다운
    // 하위메뉴가 열린상태에서 다른메뉴 클릭시 변경, 자기메뉴 클릭시 슬라이드 업
    $(".mobile ul li .material-symbols-outlined").click(function() {
      $(".mobile li > div:last-child").slideUp()
        $(this).parent().parent().next("div").stop().slideToggle(300);
        
    });
});