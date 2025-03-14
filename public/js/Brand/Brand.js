const Brand = async () => {
  let slides = [];
  try {
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res["brand"]

    slides = resource.map((item) => {
      return `<div class="swiper-slide">
            <div class="mobile:py-[4px] mobile:px-[16px] desktop:w-[142px] desktop:h-[118px] ${
              item.id != 21
                ? "mobile:border-l-[1px] mobile:border-[#f0f0f1]"
                : ""
            }"><img class="mobile:w-[70px] mobile:h-[70px] mobile:object-contain desktop:w-[110px] desktop:h-[110px]" src=${
        item.image
      } alt=""></div>
            </div>`;
    });

    document.querySelector(".swiper-wrapper-brand").innerHTML = slides.join("");

    new Swiper(".myBrand", {
        breakpoints: {
          340: {
            slidesPerView: 4.8
          },
          576: {
            slidesPerView: 6
          },
          768: {
            slidesPerView: 7.5
          },
          900: {
            slidesPerView: 9.5
          },
          1024: {
            slidesPerView: 9.5
          },
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

export default Brand;
