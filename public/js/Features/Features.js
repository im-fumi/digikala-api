const Features = async () => {
  let list = [];
  try {
    let data = await fetch("http://localhost:3004/features");
    let res = await data.json();

    list = res.map((item) => {
      return `<div class="mobile:w-[75px] mobile:h-[99px] mobile:my-[8px] desktop:h-auto desktop:w-[90px]">
            <div class="mobile:w-[52px] mobile:h-[52px] mobile:mx-auto ${item.id == 10? `mobile:flex mobile:justify-center mobile:items-center mobile:rounded-full mobile:bg-[#f0f0f1]`: ""}"><img class="mobile:object-contain ${item.id == 10? `mobile:w-[32px] mobile:h-[32px]`: ""}" src=${item.image}></div>
            <div class="mobile:mx-auto mobile:w-[75px] mobile:text-[11px] mobile:leading-[2.17] mobile:font-medium mobile:text-[#3f4064] mobile:text-center mobile:mt-[4px] desktop:w-[83px] desktop:font-semibold desktop:px-[16px]">${item.text}</div>
            </div>`;
    });

    document.querySelector(".features").innerHTML = list.join("")

  } catch (error) {
    console.log(error.message);
  }
};

export default Features;
