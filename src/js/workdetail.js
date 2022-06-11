const first = {
    name: "Designing Dashboards with usability in mind",
    year: "2020",
    aba: "Dashboard, User Experience Design",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

}

function listFirst(first) {
    let flag = `
    <div class="contant max-w-6xl mx-auto px-6 py-6 ">
            <div class="">
                <h2 class="font-bold md:text-[34px] text-5xl text-[#21243D] md:w-[506px] w-[706px] leading-tight">${first.name}</h2>
            </div>
            <div class="flex space-x-4 items-center py-5">
                <span class="inline-block md:py-0.5 md:px-2 py-2 px-4 rounded-full bg-red-500 text-white font-bold">${first.year}</span>
                <span class="inline-block text-[#21243D] md:text-[20px] ">${first.aba}</span>
            </div>
            <p class="md:text-[16px] text-[25px] text-[#000000] w-[681px]">${first.description}</p>
        </div>
    `
    return flag;
}

const second = {
    img1: "img/Rectangle 4@2x.png",
    heading1: "Heading 1",
    heading2: "Heading 2",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img2: "img/Rectangle 5.png",
    img3: "img/Rectangle 6.png"
}

function listSecond(second) {
    let flag = `
    <div class="max-w-6xl mx-auto px-6 py-6">
    <div class="w-[680px]">
        <img src="${second.img1}" alt="" class="md:w-[770px] md:h-[460px] ">
    </div>

    <div class="py-6">
        <h2 class="font-medium md:text-[30px] text-4xl">${second.heding1}</h2>
        <h3 class="font-medium md:text-[24px] py-3 text-3xl">${second.heading2}</h3>
        <p class="md:text-[16px] text-[20px] text-[#000000] w-[677px]">${second.description}</p>
    </div>
    <div class="py-3 w-[680px]">
        <img src="${second.img2}" alt="" class="md:w-[770px] md:h-[460px]">
    </div>
    <div class="py-3 w-[680px]">
        <img src="${second.img3}" alt="" class="md:w-[770px] md:h-[460px]">
    </div>
</div>
`
    return flag;
}

function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }

}
render("first", listFirst(first)),
    render("second", listSecond(second))