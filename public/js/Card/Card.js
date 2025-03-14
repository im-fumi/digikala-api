const Card = async(address, name)=>{
    let cards=[]
    try {
        let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
        let res = await data.json();
        let resource = res[address]

        cards = resource.map((item) => {
            return `<div class="mobile:w-[calc(50%-8px)] desktop:h-[inherit]"><img class="mobile:w-full mobile:object-cover mobile:rounded-[16px] desktop:max-w-[322px]" src=${item.image}></div>`
        })

        document.querySelector(name).innerHTML = cards.join("")
    } catch (error) {
        console.log(error.message);
    }
}

export default Card

