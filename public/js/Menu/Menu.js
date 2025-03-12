const Menu = async () => {
  try {
    let data = await fetch("http://localhost:3004/menu");
    let res = await data.json();

    const generateMenuItem = (item) => {
      const separator =
        item.id == 1
          ? `<span class="desktop:mr-[20px] desktop:h-[16px] desktop:w-[1px] desktop:bg-[#e0e0e2]"></span>`
          : "";
      const separator2 =
        item.id == 6
          ? `<span class="desktop:h-[16px] desktop:w-[1px] desktop:bg-[#e0e0e2]"></span>`
          : "";

      return `
        <div class="desktop:after:content-[' '] desktop:after:bg-[#ef394e] desktop:after:-bottom-0.5 desktop:after:h-[2px] desktop:after:absolute desktop:after:left-0 desktop:after:rounded-[8px] desktop:after:transition-all desktop:after:duration-200 desktop:after:w-0 desktop:hover:after:w-full desktop:hover:after:menu-div desktop:hover:after:ease-in desktop:relative desktop:h-[inherit] desktop:flex desktop:items-center ${
          item.id != 1 ? "desktop:px-[12px]" : "group/menu"
        }">
          <a class="desktop:flex desktop:items-center desktop:text-[12px] desktop:text-[#62666d] ${
            item.id == 1
              ? "desktop:font-bold desktop:text-[#627089] desktop:text-[14px]"
              : ""
          }" href="${item.link}">
            ${
              item.icon
                ? `<img class="desktop:w-[18px] desktop:h-[18px] desktop:ml-[4px]" src="${item.icon}" alt="">`
                : ""
            }${item.title}</a>
            ${item.id == 1? `<div class="desktop:w-auto desktop:h-[517px] desktop:absolute desktop:top-[40px] desktop:right-0 desktop:rounded-bl-[8px] desktop:hidden group-hover/menu:flex">
            <div class="desktop:bg-[#f5f5f5] desktop:flex desktop:flex-col desktop:w-[200px] desktop:overflow-y-auto desktop:overflow-x-hidden desktop:ltr submenu-cat"></div>

            <div class="desktop:px-[20px] desktop:pt-[20px] desktop:pb-[16px] desktop:ltr desktop:bg-[blue] desktop:overflow-auto submenu_item"></div>
            </div>`: ""}
            </div>
        ${separator}
        ${separator2}
      `;
    };

    const menu = res.map(generateMenuItem).join("");

    document.querySelector(".menu nav").innerHTML = menu;
  } catch (error) {
    console.log(error.message);
  }
};

export default Menu;
