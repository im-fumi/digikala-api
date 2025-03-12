const Option = async() =>{
    let posts = []
    try {
        let data = await fetch("http://localhost:3004/option")
        let res = await data.json()

        posts = res.map((item) =>{
            return `<div class="desktop:min-w-[200px] desktop:py-[12px]">
            <img class="desktop:w-[56px] desktop:h-[56px] desktop:mx-auto" src=${item.icon} alt="">
            <p class="desktop:text-[11px] desktop:leading-[2.17] desktop:text-[#3f4064] desktop:text-center">${item.title}</p>
            </div>`
        })

        document.querySelector(".option").innerHTML = posts.join("")
        
    } catch (error) {
        console.log(error.message);
    }
}

export default Option