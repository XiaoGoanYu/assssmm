const user = {
    name: 'Hi, I am John,',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    job: 'Creative Technologist',
    image: 'https://res.cloudinary.com/dat-nguyen/image/upload/v1654915203/img/Ellipse_1_zpaddk.png'
}


function users(user) {
    let result = `<div class="user__info md:basis-3/6">
        <h2 class="font-bold text-[44px] text-[#21243D]  text-center md:text-left md:m-0 ">${user.name}</h2>
        <h2 class="font-bold text-[44px] text-[#21243D] text-center md:text-left">${user.job}</h2>
        <p class="font-normal text-base text-[#21243D] leading-6 my-8 text-center md:text-left">${user.description}</p>
        <div class="justify-center flex md:inline-block">
        <button class="border font-normal text-[20px] text-white rounded px-4 py-2 mb-8 bg-[#FF6464] leading-[29px]  md:ml-0">Download Resume</button>
        </div>
        </div>
        <div class="user__img flex justify-center">
       <img src="${user.image}" alt="" class="w-[243px] h-[243px] rounded-full shadow-[-10px_13px_#EDF7FA]">
        </div>`

    return result;

};

function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    };
};
render('user', users(user));