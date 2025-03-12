const Sale = async() =>{
    let posts = []
    try {
        let data = await fetch("http://localhost:3004/sale")
        let res = await data.json()

        posts = res.map((item)=>{
            return `<div class="mobile:py-[12px] mobile:px-[16px] mobile:border-solid mobile:border-[#f0f0f1] mobile:border-b-[1px] desktop:w-[218px] desktop:h-[242px] desktop:px-[8px]  ${item.id == 6 || item.id == 12 || item.id == 18? "" : "desktop:border-l-[1px]"}">
            <div class="mobile:w-[130px] mobile:h-[130px] mobile:mb-[4px] mobile:mx-auto desktop:w-[150px] desktop:h-[150px]"><img class="mobile:w-[inherit] mobile:h-[inherit] mobile:object-contain" src=${item.image} alt=""></div>

            <div class="mobile:flex mobile:items-center mobile:justify-between desktop:h-[34px]">
            <div class="${item.percent? "mobile:percent" : ""}">${item.percent}</div>
            <div class="mobile:text-[14px] mobile:font-bold mobile:text-[#3f4064] mobile:leading-[2.1] mobile:flex mobile:items-center mobile:gap-x-[4px] desktop:text-[16px]">${item.price}
            <img class="mobile:w-[16px] mobile:h-[16px]" src="./public/svg/amazing/toman.svg" alt=""></div>
            </div>
        
            <div class="mobile:text-[11px] mobile:pl-5 mobile:leading-[2.17] mobile:line-through mobile:text-[#c0c2c5] mobile:text-left desktop:text-[12px]">${item.real}</div>

            </div>`
        })

        document.querySelector(".sale").innerHTML = posts.join("")

    } catch (error) {
        console.log(error.message);
    }
}

export default Sale