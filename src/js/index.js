const user = {
    id: 1,
    name: "Hi, I am John",
    name2: "Creative Technologist",
    img: "img/Ellipse 1.jpg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
};



const work = [{

        id: 1,
        name: "Designing Dashboards",
        year: "2020",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "https://res.cloudinary.com/s-ndz/image/upload/v1655088932/img/Rectangle_30_iwaafw.jpg"
    },
    {


        id: 2,
        name: "Designing Dashboards",
        year: "2018",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "https://res.cloudinary.com/s-ndz/image/upload/v1655088932/img/Rectangle_32_vxjfmq.jpg"

    },
    {
        id: 3,
        name: "Designing Dashboards",
        year: "2018",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "img/Rectangle 34.jpg"
    }
];


function listUser(user) {
    let flag = `<div class="max-w-6xl mx-auto px-6 mt-32">
    <div class="md:grid-cols-2 grid ml-7">
        <div class="col-span-1 order-2 md:order-1 text-center md:text-left">
            <h2 class="text-5xl font-bold">${user.name} <br/>${user.name2}</h2>
            <p class="text-base py-8">${user.description}</p>
            <button class="text-white bg-red-300 rounded-sm px-8 py-2">Download Resume</button>
        </div>
        <div class="col-span-1 md:ml-auto md:mr-0 order-1 md:order-2 mx-auto">
            <img src="${user.img}" alt="" class="w-[243px] h-[243px] order-1 md:order-2 ">
        </div>
    </div>`;
    return flag;
}



function listWork(work) {
    if (!Array.isArray(work) || work.length == 0) { return false; }
    let flag = "";

    for (let i = 0; i < work.length; i++) {

        flag += `
        <div class="max-w-6xl mx-auto px-6">
        
            <div class="grid md:grid-cols-[260px,auto] gap-8 py-8 ">
                <div><img src="${work[i].img}" alt="" class="md:w-[260px] md:h-[180px] rounded-lg ">
                </div>
                <div class="">
                    <a href="" class="md:text-2xl text-3xl font-bold">${work[i].name}</a>
                    <div class="flex space-x-4 items-center my-6">
                        <span class="inline-block text-white bg-black py-1 px-2 rounded-full font-bold">${work[i].year}</span>
                        <span class="text-[#8695A4]">Dashboard</span>
                    </div>
                    <p class="text-[#21243D] md:w-[690px]">${work[i].description}</p>
                </div>
            </div>
            <hr>
            
            
        </div>

            
        `;
    }
    return flag;

}

function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}
render("user", listUser(user));
render("work", listWork(work));
render("c2", listC2(c2));