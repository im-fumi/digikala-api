const Operator = async() =>{
    let rows =[]
    try {
      let data = await fetch("https://im-fumi.github.io/digikala-api/public/db.json");
      let res = await data.json();
      let resource = res["operator"]

        rows = resource.map((item)=>{
            return `<li class="desktop:my-2">
            <label for="extend__${item.id}">
            <div class="desktop:border desktop:rounded-[8px] desktop:p-3"><div class="desktop:text-[15px] desktop:flex desktop:justify-between desktop:items-center desktop:pb-3">${item.title}
            </label>
            <input class="desktop:appearance-none desktop:cursor-pointer desktop:content-[url('../svg/footer/down.svg')] desktop:block desktop:w-[24px] desktop:h-[24px] desktop:mr-[12px] desktop:checked:content-[url('../svg/footer/upcheck.svg')]" type="checkbox" name="extend__${item.id}" id="extend__${item.id}"></div>
            
            <div id="sho__${item.id}" class="desktop:hidden desktop:border-t-[1px] desktop:border-[#f0f0f1] desktop:border-solid desktop:font-normal">
            <span class="${item.id == 1? "desktop:text-[10pt]":"desktop:text-[12pt]"}">${item.text}</span></div>
            </div>
            </li>`
        });

        document.querySelector(".operator").innerHTML = rows.join("")

        function setAccordion() {
            resource.forEach(item => {
              const checkbox = document.getElementById(`extend__${item.id}`);
              const content = document.getElementById(`sho__${item.id}`);
              
              checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                  content.style.display = 'block'; // Show content
                } else {
                  content.style.display = 'none'; // Hide content
                }
              });
            });
          }
          
          // After rendering the HTML, call the setupAccordion function to add event listeners
          setAccordion();

    } catch (error) {
        console.log(error.message);
    }
}
export default Operator