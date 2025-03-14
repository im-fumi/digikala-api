const Story = async () => {
  let slides = [];
  try {
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res["story"]

    slides = resource.map((item) => {
      return `<div class="swiper-slide mobile:ml-[12px] mobile:pt-[5px] desktop:ml-0 desktop:w-[84px] desktop:h-[inherit] ${item.id == 1? "mobile:mr-[8px] desktop:mr-[0]": ""}">
        <div class="mobile:w-[84px] desktop:h-full">
        <div class="mobile:cursor-pointer mobile:relative mobile:w-[84px] mobile:h-[84px] mobile:mx-auto">
        <img class="mobile:object-cover mobile:mx-auto mobile:w-[74px] mobile:h-[74px] mobile:rounded-full mobile:outline-purple-500 mobile:outline-2 mobile:outline-offset-[3px] mobile:outline-none" src=${
          item.image
        } alt="">
        ${
          item.time
            ? `<div class="mobile:text-[10px] mobile:w-max mobile:bg-[#fdecf5] mobile:text-[#e03e97] mobile:font-bold mobile:translate-y-[30%] mobile:leading-[2.17] mobile:absolute mobile:bottom-2 mobile:left-0 mobile:right-0 mobile:mx-auto mobile:px-[6px] mobile:border-solid mobile:border-[2px] mobile:border-white mobile:rounded-[8px] desktop:text-[11px]">${item.time}</div>`
            : ""
        }
        </div>
        <div class="mobile:mt-[3px] mobile:text-[10px] mobile:cursor-pointer mobile:text-[#2b2b2b] mobile:leading-[2.17] mobile:line-clamp-2 mobile:overflow-hidden mobile:text-ellipsis mobile:mx-auto mobile:w-[84px]  desktop:text-[11px] desktop:mt-[5px]">${
          item.data
        }</div>
        </div>
        </div>`;
    });

    document.querySelector(".swiper-wrapper-story").innerHTML = slides.join("");

    new Swiper(".myStory", {
      slidesPerView: 12.4,
      breakpoints: {
        340: {
          slidesPerView: 6
        },
        576: {
          slidesPerView: 8
        },
        768: {
          slidesPerView: 10
        },
        1024: {
          slidesPerView: 12.4
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

export default Story;
