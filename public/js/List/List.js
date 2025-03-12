const List = async () => {
  let items = [];
  let rows = [];
  try {
    let data = await fetch("http://localhost:3004/list");
    let res = await data.json();

    const generateItem = (item) => {
      return `<a href="#" class="mobile:text-[12px] mobile:block mobile:text-[#424750] mobile:leading-[2.15] mobile:mb-[12px] desktop:text-[14px] desktop:text-[#81858b] desktop:mb-[8px]">${item}</a>`;
    };

    const generateIcon = (item) => {
      return `<img src=${item} class="desktop:h-[40px] desktop:w-[40px]" alt="">`;
    };

    items = res.map((item) => {
      if (item.id == 4) {
        return `<div class="desktop:w-5/12 desktop:grow">
                <div><h4 class="desktop:text-[16px] desktop:font-bold desktop:text-[#3f4064] desktop:leading-[2.1] desktop:mb-[12px]">${
                  item.title
                }</h4>
                <div class="desktop:h-[40px] desktop:flex desktop:items-center desktop:gap-x-[32px]">
                ${item.icon.map(generateIcon).join("")}
                </div>
                </div>

                <div class="desktop:mt-[32px]"><h4 class="desktop:text-[16px] desktop:font-bold desktop:text-[#3f4064] desktop:leading-[2.1] desktop:mb-[12px]">${
                  item.text
                }</h4>
                <div class="desktop:h-[48px] desktop:flex desktop:gap-x-[8px]"><input class="desktop:px-[16px] desktop:text-[15px] desktop:text-[#3f4064] desktop:leading-[2.15] desktop:bg-[#f0f0f1] desktop:rounded-[8px] desktop:w-[260px] desktop:h-[inherit] desktop:outline-none desktop:caret-[#ef4056]" type="email" name="email" placeholder="ایمیل شما">
                <button type="submit" class="desktop:px-[16px] desktop:py-[12px] desktop:bg-[#e0e0e2] desktop:text-[14px] desktop:font-bold desktop:text-[white] desktop:rounded-[8px]">ثبت</button>
                </div>
                </div>
                </div>`;
      }
      return `<div class="desktop:w-6/12 desktop:grow">
            <p class="desktop:text-[16px] desktop:text-[#3f4064] desktop:font-bold desktop:leading-[2.1] desktop:mb-[8px]">${
              item.title
            }</p>
            ${item.subtitle.map(generateItem).join("")}
            </div>`;
    });

    rows = res.map((item) => {
        if (item.id <= 3){
            return `<div class="mobile:border-b-[1px] mobile:border-[#e0e0e2] mobile:border-solid">
            <label for="more__${item.id}">
            <div class="mobile:py-[12px] mobile:text-[13px] mobile:leading-[2.15] mobile:font-bold mobile:flex mobile:justify-between mobile:items-center mobile:cursor-pointer">${
              item.title
            }
            </label>
            <input class="mobile:appearance-none mobile:cursor-pointer mobile:content-[url('../svg/footer/down.svg')] mobile:block mobile:w-[24px] mobile:h-[24px] mobile:checked:content-[url('../svg/footer/upcheck.svg')]" type="checkbox" name="more__${item.id}" id="more__${item.id}"></div>
             <div id="show__${item.id}" class="mobile:hidden mobile:flex-col mobile:flex-wrap">${
                item.subtitle? item.subtitle.map(generateItem).join("") : ""
              }</div>


            </div>`;
        }

    });

    
    document.querySelector(".list").innerHTML = items.join("");
    document.querySelector(".footer_item").innerHTML = rows.join("");

    function setupAccordion() {
      res.forEach(item => {
        const checkbox = document.getElementById(`more__${item.id}`);
        const content = document.getElementById(`show__${item.id}`);
        
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            content.style.display = 'flex'; // Show content
          } else {
            content.style.display = 'none'; // Hide content
          }
        });
      });
    }
    
    // After rendering the HTML, call the setupAccordion function to add event listeners
    setupAccordion();
  } catch (error) {
    console.log(error.message);
  }
};

export default List;
