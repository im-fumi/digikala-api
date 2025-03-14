const SubItem = async () => {
  let posts = [];
  try {
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res["submenu-item"]

    resource.forEach((submenu) => {
      let submenuHTML = `
            <div class="desktop:rtl desktop:bg-white" id="submenu-item-${submenu.id}">
                <div class="desktop:flex desktop:items-center desktop:gap-x-[4px] desktop:mb-[20px] desktop:text-[12px] desktop:font-bold desktop:leading-[2.17] desktop:text-[#008eb2]">
                    ${submenu.title}
                    <img class="desktop:h-[16px] desktop:w-[16px]" src="./public/svg/product/more.svg" alt="More Icon">
                </div>
                <div class="desktop:flex">
            `;

      submenu.items.forEach((itemList) => {
        submenuHTML += `<div class="desktop:min-w-[220px]">`;

        itemList.forEach((item) => {
          submenuHTML += `
                    <div class="desktop:flex desktop:flex-col">
                        <a href="#" class="desktop:text-[14px] desktop:leading-[2.15] desktop:font-bold desktop:text-[#0c0c0c] desktop:py-[4px] desktop:mb-[8px] desktop:hover:text-[#ef394e] desktop:before:content-[''] desktop:before:w-[2px] desktop:before:h-[14px] desktop:before:ml-[8px] desktop:before:bg-[#ef4056] desktop:flex desktop:items-center">${item.title}<img class="desktop:w-[16px] desktop:h-[16px]" src="./public/svg/header/submenu/more.svg" alt=""></a>
                    `;

          if (item.subtitle && item.subtitle.length > 0) {
            submenuHTML += "<div>";
            item.subtitle.forEach((sub) => {
              submenuHTML += `<a href="#" class="desktop:block desktop:text-[12px] desktop:leading-[2.15] desktop:text-[#81858b] desktop:py-[4px] desktop:h-[34px] desktop:hover:text-[#ef394e]">${sub}</a>`;
            });
            submenuHTML += "</div>";
          }

          submenuHTML += "</div>";
        });

        submenuHTML += `</div>`;
      });

      submenuHTML += "</div>";
      submenuHTML += "</div>";

      posts.push(submenuHTML);
    });

    document.querySelector(".submenu_item").innerHTML = posts.join("");

    
  } catch (error) {
    console.log(error.message);
  }
};

export default SubItem;
