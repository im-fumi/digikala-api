const Option = async() =>{
    let posts = []
    try {
        let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
        let res = await data.json();
        let resource = res["option"]

        posts = resource.map((item) =>{
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