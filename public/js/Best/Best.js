const Bestseller = async (address, name) => {
  let slides = [];
  try {
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res[address]

    const generateRow = (image, num, title) => {
      return `<div class="mobile:flex mobile:gap-x-[12px] mobile:h-[86px] mobile:bg-white mobile:items-center desktop:w-[inherit]">
                        <img class="mobile:w-[86px] mobile:h-[86px] mobile:object-contain" src="${image}" alt="">
                        <div class="mobile:text-[22px] mobile:leading-[2.1] mobile:font-extrabold mobile:text-[#19bfd3] desktop:text-[26px]">${num}</div>

                        <div class="mobile:before:content-[' '] mobile:before:absolute mobile:before:block mobile:before:-bottom-[10px] mobile:before:h-[1px] mobile:before:bg-[#f0f0f1] mobile:before:w-[100%] mobile:before:left-0 mobile:relative mobile:h-[86px] mobile:flex mobile:items-center">
                        <div class="mobile:text-[11px] mobile:leading-[2.17] mobile:text-[#3f4064] mobile:text-right mobile:line-clamp-2 mobile:overflow-hidden mobile:text-ellipsis desktop:text-[12px]">${title}</div></div>

                    </div>`;
    };

    slides = resource.map((item) => {
      return `<div class="swiper-slide">
            <div class="mobile:flex mobile:flex-col mobile:flex-wrap mobile:gap-y-[20px] desktop:w-[314px] desktop:h-[298px] ">
            ${generateRow(item.image1, item.num1, item.title1)}
            ${generateRow(item.image2, item.num2, item.title2)}
            ${generateRow(item.image3, item.num3, item.title3)}</div>

            </div>`;
    });

    document.querySelector(name).innerHTML = slides.join("");

    new Swiper(".myBestseller", {
      breakpoints: {
        340: {
          slidesPerView: 1.7
        },
        576: {
          slidesPerView: 2.5
        },
        768: {
          slidesPerView: 3.2
        },
        1024: {
          slidesPerView: 4
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

export default Bestseller;
