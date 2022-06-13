const id = new URLSearchParams(window.location.search).get("id");
const title = {
    name: "Blog"
};

function listTitle(title) {
    let flag = `
    <div class="font-bold text-5xl h-16 md:text-3xl my-20"><a href="">${title.name}</a></div>
    `
    return flag;
}
const ND = [{
        id: 1,
        name: "UI Interactions of the week",
        day: "12 Feb 2019",
        aba: "Express,Handlebars",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 2,
        name: "UI Interactions of the week",
        day: "12 Feb 2019",
        aba: "Express,Handlebars",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 3,
        name: "UI Interactions of the week",
        day: "12 Feb 2019",
        aba: "Express,Handlebars",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
];

function listND(ND) {
    if (!Array.isArray(ND) || ND.length == 0) { return false; }
    let flag = "";
    for (let i = 0; i < ND.length; i++) {
        flag += `
        <div class="contant ">
                <h2 class="font-semibold md:text-xl text-3xl"><a href="">${ND[i].name}</a></h2>
                <div class="flex mt-2 space-x-4 py-3">
                    <span class="text-basic text-[#21243D] md:text-xl text-xl">${ND[i].day}</span>
                    <span>|</span>
                    <span class="text-[#8695A4] text-basic md:text-xl text-xl">${ND[i].aba}</span>
                </div>
                <p class="w-[389px] mb-5 md:text-lg text-xl md:w-[682px]">${ND[i].description}</p>
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
const found = products.find(function(element) {
    return element.id == id
});