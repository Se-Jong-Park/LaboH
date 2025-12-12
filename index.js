const menuEl = document.querySelector('.menu_btn');
const closeEl = document.querySelector('.menu_close');
const head_bg = document.querySelector('#head_layout .inner .inner_background');
const menu_bar = document.querySelector('#head_layout #menu_bar');
const menu_btn = document.querySelector('#head_layout .inner .menu_btn');
const close_btn = document.querySelector('#head_layout .inner .menu_close');

menuEl.addEventListener('click', function() {
  gsap.to(menu_bar, .2, {
    opacity:1,
    display:'block'
  })
  gsap.to(head_bg, .2, {
    opacity:1,
    display:'block'
  })
  gsap.to(menu_btn, .2, {
    opacity:0,
    display:'none'
  })
  gsap.to(close_btn, .2, {
    opacity:1,
    display:'block'
  })
});
closeEl.addEventListener('click', function() {
  gsap.to(menu_bar, .2, {
    opacity:0,
    display:'none'
  })
  gsap.to(head_bg, .2, {
    opacity:0,
    display:'none'
  })
  gsap.to(menu_btn, .2, {
    opacity:1,
    display:'block'
  })
  gsap.to(close_btn, .2, {
    opacity:0,
    display:'none'
  })
});

new Swiper('.banner .swiper-container', {
  autoplay: {
    delay : 5000
  },
  loop: true,
  slidesPerView : 1 // 한번에 보여줄 슬라이드 개수
});

new Swiper('.sub_banner .swiper-container', {
  autoplay: {
    delay : 5000
  },
  loop: true,
  slidesPerView : 1
});

new Swiper('.planning .swiper-container', {
  autoplay: {
    delay : 5000
  },
  loop: true,
  slidesPerView : 2, // 한번에 보여줄 슬라이드 개수
  pagination: {
    el: '.planning .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.planning .swiper-prev',
    nextEl: '.planning .swiper-next'
  }
});

new Swiper('.event .swiper-container', {
  autoplay: {
    delay : 3000
  },
  loop: true,
  slidesPerView : 3,
  spaceBetween : 3,
  centeredSlides : false,
  navigation: {
    prevEl: '.event .swiper-prev',
    nextEl: '.event .swiper-next'
  }   
});

const bg = document.querySelector('.inner_background');

window.addEventListener('scroll', () => {
  const max = 150;
  const value = Math.min(window.scrollY / max, 1);
  bg.style.opacity = value;
});

// 배지
const badgesEl = document.querySelector('#head_layout .right_badge');
const totopEl = document.querySelector('#to-top');
window.addEventListener('scroll',_.throttle(function(){
  if (window.scrollY > 500) {
    // 배지 보이기
    // badgesEl.style.display = 'none';
    // gasp.to(요소, 지속시간)
    gsap.to(badgesEl, .5, {
      y:0
    })
    // 상단버튼 보이기
    gsap.to(totopEl, .5, {
      x:0
    })
        
  }else {
    // 배지 숨기기
    // badgesEl.style.display = 'block';
    gsap.to(badgesEl, .5, {
      y:500
    })
    gsap.to(totopEl, .5, {
      x:500
    })
  }
}, 300));

totopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  })
});