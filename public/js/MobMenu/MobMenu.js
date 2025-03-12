const MobMenu = async () =>{
    let posts = []
    try {
    let data = await fetch("http://localhost:3004/mobile-menu")
    let res = await data.json()

    posts = res.map((item) =>{
        return `<div class="mobile:py-[4px] mobile:flex mobile:flex-col mobile:flex-1 mobile:justify-center mobile:items-center mobile:cursor-pointer">
        <img class="mobile:w-[24px] mobile:h-[24px]" src=${item.icon} alt="">
        <p class="mobile:text-[11px] mobile:font-bold mobile:leading-[2.17] ${item.id ==1? "mobile:text-[#0c0c0c]": "mobile:text-[#81858b]"}">${item.text}</p>
        </div>`
    })
    document.querySelector(".mobile-menu").innerHTML = posts.join(" ")
        
    } catch (error) {
        console.log(error.message);
    }
}

export default MobMenu
