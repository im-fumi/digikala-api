const Amazing = async () => {
  let slides = [];
  try {
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res["amazing"]

    slides = resource.map((item) => {
      if (item.id == 0) {
        return `<div class="mobile:hidden desktop:flex desktop:swiper-slide">
            <div
              class="desktop:w-[166px] desktop:h-full desktop:flex desktop:items-center desktop:flex-col desktop:flex-wrap desktop:justify-between"
            >
              <div
                class="desktop:h-[216px] desktop:flex desktop:flex-col desktop:flex-wrap desktop:items-center desktop:justify-between"
              >
                <img
                  class="desktop:w-[88px] desktop:h-[88px]"
                  src=${item.image}
                  alt=""
                />
                <div
                  class="desktop:h-[24px] desktop:flex desktop:items-center desktop:gap-x-[2px]"
                >
                  <div class="desktop:time"></div>
                  <div class="desktop:colon">:</div>
                  <div class="desktop:time"></div>
                  <div class="desktop:colon">:</div>
                  <div class="desktop:time"></div>
                </div>
                <img
                  class="desktop:w-[80px] desktop:h-[80px]"
                  src=${item.dis}
                  alt=""
                />
              </div>
              <div
                class="desktop:h-[26px] desktop:text-[12px] desktop:font-bold desktop:text-white desktop:flex desktop:items-center desktop:justify-center"
              >
                 ${item.title}
                <img
                  class="desktop:h-[18px] desktop:w-[18px]"
                  src=${item.icon}
                  alt=""
                />
              </div>
            </div>
          </div>`;
      }
      if (item.id == 13) {
        return `<div class="swiper-slide mobile:h-[218px] mobile:bg-white mobile:rounded-tl-[8px] mobile:rounded-bl-[8px] desktop:h-auto">
            <div>
            <div class="mobile:mx-auto mobile:w-[52px] mobile:h-[52px] mobile:p-[8px] mobile:border-solid mobile:border-[2px] mobile:border-[#19bfd3] mobile:rounded-[50%]"><img class="mobile:w-[32px] mobile:h-[32px]" src=${item.image}></div>
            <div class="mobile:text-[14px] mobile:text-[#3f4064] mobile:leading-[2.15] mobile:mt-[12px]">${item.title}</div>
            </div>
            </div>`;
      } else
        return `<div class="swiper-slide mobile:h-[218px] mobile:bg-white mobile:p-[8px] desktop:h-auto ${item.id == 1 ? `mobile:rounded-tr-[8px] mobile:rounded-br-[8px]`: ""}">
            <div class=" desktop:w-[144px] desktop:relative">

            <div class="mobile:relative mobile:mx-auto mobile:mb-[8px] mobile:max-w-[114px] mobile:max-h-[114px] desktop:max-w-[132px] desktop:max-h-[132px] desktop:mb-[14px]"><img class="mobile:w-[inherit] mobile:h-[inherit]" src=${item.image}>
            <div class="mobile:percent mobile:absolute mobile:bottom-0 mobile:left-0 desktop:hidden">${item.percent}</div>
            
            </div>

            ${item.icon? `<div class="mobile:hidden desktop:w-[24px] desktop:h-[24px] desktop:absolute desktop:top-1 desktop:right-0"><img class="desktop:w-[18px] desktop:h-[18px]" src=${item.icon}></div>`:""}

            
            <div class="desktop:h-[98px] desktop:flex desktop:flex-col desktop:flex-wrap desktop:gap-y-[10px]">

            <div class="mobile:text-[12px] mobile:line-clamp-2 mobile:overflow-hidden mobile:text-ellipsis mobile:text-[#62666d] mobile:h-[40px] mobile:leading-[20px] mobile:text-right">${item.title}</div>

            <div>
            <div class="desktop:flex desktop:justify-between">
            <div class="mobile:hidden desktop:flex desktop:percent">${item.percent}</div>
            <div class="mobile:flex mobile:justify-self-end mobile:gap-x-[5px] mobile:text-[14px] mobile:font-bold mobile:text-[#3f4064]">${item.price}
            <img class="mobile:w-[16px] mobile:h-[16px]" src="./public/svg/amazing/toman.svg"></div>
            </div>

            <div class="mobile:pl-[20px] mobile:text-[#c0c2c5] mobile:text-[12px] mobile:line-through mobile:text-left">${item.real}</div>
            </div>

            </div>

            </div>
            </div>`;
    });

    document.querySelector(".swiper-wrapper-amazing").innerHTML = slides.join(" ");

    new Swiper(".myAmazing", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
      breakpoints: {
        340: {
          spaceBetween: 4,
          slidesPerView: 3.5
        },
        576: {
          spaceBetween: 4,
          slidesPerView: 5
        },
        768: {
          spaceBetween: 4,
          slidesPerView: 7.25

        },
        1024: {
          spaceBetween: 4,
          slidesPerView: 8
        },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default Amazing;
