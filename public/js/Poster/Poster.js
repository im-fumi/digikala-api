const Poster = async(address, name)=>{
    let posts=[]
    try {
        let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
        let res = await data.json();
        let resource = res[address]

        posts = resource.map((item) => {
            return `<div class="mobile:mb-[16px] mobile:w-full desktop:mb-0 desktop:w-[660px] desktop:h-[inherit]"><img class="mobile:w-full mobile:rounded-[16px] mobile:object-cover" src=${item.image}></div>`
        })

        document.querySelector(name).innerHTML = posts.join("")
    } catch (error) {
        console.log(error.message);
    }
}

export default Poster