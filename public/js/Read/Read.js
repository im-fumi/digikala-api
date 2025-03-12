const Read = async() =>{
    let posts = []
    try {
        let data = await fetch("http://localhost:3004/read")
        let res = await data.json()

        posts = res.map((item) =>{
            return `<div class="mobile:mb-[4px] mobile:border mobile:rounded-[8px] desktop:w-[325px]">
            <img class="mobile:object-cover mobile:rounded-t-[8px] mobile::mx-auto desktop:w-[323px] desktop:h-[201px]" src=${item.image} alt="">
            <div class="mobile:text-[11px] mobile:mt-[8px] mobile:mb-[12px] mobile:px-[16px] mobile:leading-[2.17] mobile:text-[#0c0c0c] desktop:text-[12px]">${item.title}</div>
            </div>`
        })

        document.querySelector(".read").innerHTML = posts.join("")
        
    } catch (error) {
        console.log(error.message);
    }
}

export default Read