const Market = async()=>{
    let products=[]
    try {
        let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
        let res = await data.json();
        let resource = res["market"]

        products = resource.map((item) => {
            return `<div class="mobile:w-[68px] mobile:h-[69px] mobile:bg-white mobile:rounded-full mobile:relative mobile:flex mobile:justify-center mobile:items-center desktop:w-[74px] desktop:h-[74px] desktop:p-[8px]"><img class="mobile:w-[52px] mobile:h-[53px] mobile:rounded-[50%] desktop:w-[58px] desktop:h-[58px]" src=${item.image} alt="">
            <div class="mobile:percent mobile:text-[11px] mobile:absolute mobile:bottom-0 mobile:right-0 desktop:text-[12px]">${item.price}</div>
            </div>`
        })

        document.querySelector(".market").innerHTML = products.join("")
    } catch (error) {
        console.log(error.message);
    }
}

export default Market

