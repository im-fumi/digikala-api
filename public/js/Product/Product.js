const Product = async (address, name) => {
    let products = [];
    try {
        let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
        let res = await data.json();
        let resource = res[address]

        const generateImage = (src) => {
            return `<div class="mobile:flex mobile:justify-center mobile:items-center mobile:max-w-[600px] mobile:bg-white mobile:p-[8px] desktop:w-[146px] desktop:h-[146px]">
                        <img class="mobile:object-contain desktop:w-[130px] desktop:h-[130px] " src="${src}" alt="">
                    </div>`;
        };

        products = resource.map((item) => {
            return `
                <div class="mobile:bg-white mobile:py-[8px] mobile:px-[20px] desktop:w-[333px] desktop:h-[416px]">
                    <div class="mobile:text-[14px] mobile:font-bold mobile:leading-[2.1] mobile:text-[#23254e] desktop:text-[16px]">${item.title}</div>
                    <div class="mobile:text-[11px] mobile:text-[#81858b] mobile:leading-[2.17] mobile:mb-[8px]">${item.subtitle}</div>

                    <div class="mobile:grid mobile:grid-cols-2 mobile:gap-[1px] mobile:bg-[#f0f0f1]">
                        ${generateImage(item.image1)}
                        ${generateImage(item.image2)}
                        ${generateImage(item.image3)}
                        ${generateImage(item.image4)}
                    </div>

                    <div class="mobile:h-[26px] mobile:mt-[4px] mobile:mb-[12px] mobile:flex mobile:justify-center">
                        <div class="mobile:flex mobile:items-center mobile:text-[#19bfd3] mobile:text-[12px] mobile:font-bold mobile:leading-[2.17]">
                            ${item.text} <img class="mobile:w-[18px] mobile:h-[18px]" src="${item.icon}" alt="">
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector(name).innerHTML = products.join("");
    } catch (error) {
        console.log(error.message);
    }
};

export default Product;
