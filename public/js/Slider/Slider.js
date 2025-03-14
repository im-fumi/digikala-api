const Slider = async () => {
  let slides = [];
  try {
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res["slider"]

    slides = resource.map((item) => {
      return `<div class="swiper-slide mobile:h-[inherit]"><img class="mobile:rounded-[20px] mobile:object-cover mobile:cursor-pointer mobile:w-[inherit] mobile:h-[inherit] desktop:rounded-none" src=${item.image} title=${item.title}></div>`;
    });

    document.querySelector(".swiper-wrapper-slider").innerHTML = slides.join("");

    new Swiper(".mySlider", {
      centeredSlides: true,
      loop:true,

      breakpoints: {
        340: {
          spaceBetween: 10,
          slidesPerView: 1.1,
        },
        576: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,

        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30
        },
      },
      
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default Slider;
