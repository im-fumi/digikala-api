const Subcat = async ()=>{
    let posts = []
    try {
        let data = await fetch("http://localhost:3004/submenu-cat")
        let res = await data.json()

        posts = res.map((item)=>{
            return `<div id="menu-item-${item.id}" onmouseover="showSubmenu(${item.id})" onmouseout="hideSubmenu(${item.id})"><a class="desktop:w-[183px] desktop:h-[52px] desktop:py-[12px] desktop:px-[8px] desktop:flex  desktop:items-center desktop:gap-x-[8px] desktop:text-[12px] desktop:font-bold desktop:leading-[2.17] desktop:text-[#3f4064] desktop:hover:text-[#ef394e] desktop:hover:bg-[white]" href="#"><img class="desktop:w-[18px] desktop:h-[18px]" src=${item.icon} alt="">${item.title}</a></div>`
        })

        document.querySelector(".submenu-cat").innerHTML = posts.join(" ")
    } catch (error) {
        console.log(error.message);
    }
}

export default Subcat

