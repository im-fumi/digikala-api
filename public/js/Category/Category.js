const Category = async () => {
  let rows = [];
  try {
    // Fetch the data from your API
    let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
    let res = await data.json();
    let resource = res["category"]

    const category = document.querySelector(".swiper-wrapper-cat"); // Use your existing container

    // Group the items and render them as HTML
    for (let i = 0; i < resource.length; i += 3) {
      const groupItems = resource.slice(i, i + 3);

      // Create a group div with its items
      const groupHTML = `
            <div class="swiper-slide mobile:flex-col mobile:gap-[4px] mobile:justify-start mobile:items-start">
              ${groupItems
                .map(
                  (item) => `
                  <div class="mobile:px-[16px] mobile:h-[160px]">
                  <div class="mobile:w-[90px] mobile:h-[90px]"><img src="${item.image}" alt="${item.title}"></div>

                    <p class="mobile:text-[#0c0c0c] mobile:leading-[2.17] mobile:font-bold mobile:text-[11px] mobile:text-center mobile:mt-[8px]">${item.title}</p>
                  </div>
                `
                )
                .join("")}
            </div>
          `;

      // Add the group to the category container
      category.innerHTML += groupHTML;
    }

    // Split the data into two groups
    const group1 = resource.slice(0, 8); // Items 1 to 8
    const group2 = resource.slice(8, 16); // Items 9 to 16

    // Function to create a div for each group with flex styling
    const createRowHTML = (group) => {
      return `
              <div class="desktop:w-[inherit] desktop:h-[160px] desktop:flex desktop:flex-row desktop:justify-between">
                ${group
                  .map((item) => {
                    return `
                    <div class="desktop:w-[140px] desktop:h-[inherit] desktop:px-[16px]">
                      <div class="desktop:w-[100px] desktop:h-[100px]"><img src="${item.image}" alt=""></div>
                      <p class="desktop:text-center desktop:mt-[8px] desktop:text-[#0c0c0c] desktop:leading-[2.17] desktop:font-bold desktop:text-[12px]">${item.title}</p>
                    </div>
                  `;
                  })
                  .join("")}
              </div>
            `;
    };

    // Generate the two rows (divs for each group)
    rows.push(createRowHTML(group1)); // First group (IDs 1 to 8)
    rows.push(createRowHTML(group2)); // Second group (IDs 9 to 16)

    // Insert the generated HTML into the container
    document.querySelector(".category").innerHTML = rows.join("");

    new Swiper(".myCategory", {
      breakpoints: {
        340: {
          slidesPerView: 3.5
        },
        576: {
          slidesPerView: 4.5
        },
        768: {
          slidesPerView: 5.5
        },
        1024: {
          slidesPerView: 5.5
        },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default Category;
