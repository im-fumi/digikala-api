const Digi = async ()=>{
    let posts = []
    let rows = []
    try {
        let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
        let res = await data.json();
        let resource = res["digi"]

        posts = resource.map((item) =>{
            return `<a href="#" class="desktop:w-[188px] desktop:h-[80px] desktop:px-[20px] desktop:flex desktop:items-center desktop:justify-center desktop:flex-col desktop:border-b-[1px]  desktop:border-solid desktop:border-[#e0e0e2] ${item.id == 1 || item.id == 9? "": "desktop:border-r-[1px]"}"><img class="desktop:h-[20px] desktop:object-contain" src=${item.icon} alt=""></a>`
        })

        rows = resource.map((item) =>{
            return `<a href="#" class="mobile:w-[33%] mobile:flex mobile:flex-grow mobile:items-center mobile:justify-center mobile:flex-col mobile:px-[20px] mobile:bg-[#fff] mobile:h-[80px]"><img class="mobile:h-[20px] mobile:object-contain" src=${item.icon} alt=""></a>`
        })

        document.querySelector(".digi").innerHTML = posts.join(" ")
        document.querySelector(".mobile-digi").innerHTML = rows.join(" ")

    } catch (error) {
        console.log(error.message);
    }
}

export default Digi