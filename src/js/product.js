const title = {
    name: "Work"
};

function listTitle(title) {
    let flag = `
    <h2 class="font-bold text-[44px] mb-5">${title.name}</h2>
    `
    return flag;
}

const ND = [{
        id: 1,
        name: "Designing Dashboards",
        year: "2020",
        aba: "Dashboard",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "img/Rectangle 30.jpg"
    },
    {
        id: 2,
        name: "Vibrant Portraits of 2020",
        year: "2018",
        aba: "Illustration",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "img/Rectangle 32.jpg"
    },
    {
        id: 3,
        name: "36 Days of Malayalam type",
        year: "2018",
        aba: "Typography",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "img/Rectangle 34.jpg"
    },
    {
        id: 4,
        name: "Components",
        year: "2018",
        aba: "Components, Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "img/Rectangle 40.png"
    },

];

function listND(ND) {
    if (!Array.isArray(ND) || ND.length == 0) { return false; }
    let flag = "";
    for (let i = 0; i < ND.length; i++) {
        flag += `
        <div class="grid md:grid-cols-[246px,auto] mx-auto gap-8">
        <div class="img  mx-4">
            <img src="${ND[i].img}" alt="" class="md:w-[246px] md:h-[180px] ">
        </div>
        <div class="ND mx-4">
            <h2 class="font-bold text-4xl"><a href="">${ND[i].name}</a></h2>
            <div class="flex justify-content space-x-6 items-center py-4">
                <span class="inline-block py-0.5 px-2 rounded-full bg-black text-white font-bold">${ND[i].year}</span>
                <span class="text-[#8695A4] text-[20px]">${ND[i].aba}</span>
            </div>
            <p class="text-[#21243D] text-[16px] w-[418px]">${ND[i].description}</p>
        </div>

    </div>
    <hr class="my-5">
`

    }
    return flag;
}

function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}
render("title", listTitle(title));
render("ND", listND(ND));