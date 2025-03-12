const Item = async () => {
  let rows = [];
  try {
    let data = await fetch("http://localhost:3004/item");
    let res = await data.json();

    rows = res.map((item) => {
      return `<div class="mobile:py-[8px] mobile:flex mobile:justify-between mobile:items-center mobile:border-b-[1px] mobile:border-[#f0f0f1] mobile:border-solid">
            <div class="mobile:flex mobile:gap-2">
            <div class="mobile:w-[36px] mobile:h-[36px] mobile:flex mobile:items-center mobile:justify-center mobile:rounded-full ${
              item.id == 1 ? "mobile:bg-[#f2f2f2]" : ""
            }"><img src=${item.image} class="mobile:w-[24px] mobile:h-[24px] ${
        item.id == 2
          ? "mobile:w-[36px] mobile:h-[36px] mobile:rounded-full"
          : ""
      }"></div>

            <div class="mobile:flex mobile:flex-col mobile:gap-1 mobile:text-[12px]">
            <span class="mobile:font-bold mobile:text-[#424750]">${
              item.title
            }</span>
            <span class="mobile:text-[#81858b]">${item.subtitle}</span>
            </div>
            </div>

            <div class="mobile:w-[60px] mobile:h-[40px] mobile:bg-[#f2f2f2] mobile:py-[6px] mobile:px-[16px] mobile:text-[#424750] mobile:text-[11px] mobile:font-bold mobile:rounded-full mobile:flex mobile:items-center mobile:justify-center">${
              item.button
            }</div>
            
            </div>`;
    });

    document.querySelector(".item").innerHTML = rows.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export default Item;
