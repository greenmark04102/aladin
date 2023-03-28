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
Array.from(tabButtons).forEach((eachBotton, index) => {
  eachBotton.addEventListener('click', function () {
    let tabBoxs = document.querySelectorAll('.tabBox');
    for (var i = 0; i < tabBoxs.length; i++) {
      tabBoxs[i].classList.remove("on");
      tabButtons[i].classList.remove("on");
    }
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons[0].click();


$(function () {
  // 메뉴클릭시 하위메뉴 슬라이드 다운
  // 하위메뉴가 열린상태에서 다른메뉴 클릭시 변경, 자기메뉴 클릭시 슬라이드 업
  $(".mobile ul li .material-symbols-outlined").click(function () {
    $(".mobile li > div:last-child").slideUp();
    $(this).parent().parent().next("div").stop().slideToggle(300);

  });
});

// 맨 처음에 열어놓기,,,, 어캐하지



var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('.bar');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        // console.log('scroll down');
        fixBox.classList.remove('show');
    }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //Scroll up
            // console.log('scroll up');
            fixBox.classList.add('show');
        }
    }
    lastScrollTop = nowScrollTop;
}

// 근데 왜 자동 슬라이드 스와이퍼가 돌아가면 바가 사라질까?
