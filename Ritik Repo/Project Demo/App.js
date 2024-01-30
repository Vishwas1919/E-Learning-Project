const data=[
    {
        redtitle:'Popular',
        image:"/ASSETS/image1.jpeg",
        type:'Unconscious Bias',
        duration:'Duration : 25Mins',
        fee:'$15.90',
        feetype:'*Free',
        institute:'/ASSETS/cloud.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (43,435)',
        button:'Enroll Now'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image2.jpeg",
        type:'Communication ',
        duration:'Duration : 50Mins',
        fee:'$15.90',
        feetype:'',
        institute:'/ASSETS/coursera.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (30,435)',
        button:'Buy Now'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image3.jpeg",
        type:'Communication',
        duration:'Duration : 1hour 12Mins',
        fee:'$10.90',
        feetype:'',
        institute:'/ASSETS/khan.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i>(28,435)',
        button:'Buy Now'

    }
]

data.forEach((element,i) => {

    const main=document.querySelector(".main");

    const card=document.createElement("div");
    card.classList='card';
    const Educard=`
    <span class="info">
        <p class="para">${data[i].redtitle}</p>
    <img src="${data[i].image}">
    <h3>${data[i].type}</h3>
    <h4>${data[i].duration}</h4>
    <span><strike>${data[i].fee}</strike></span>
    <span>${data[i].feetype}</span>
    <div  class="institute">
        <img  src="${data[i].institute}">
    </div>
    <span class="rating">${data[i].rating}</span> 
    </span>
    <button class="dynamic-button" onclick="doNow()">${data[i].button}</button>

    `
    card.innerHTML+= Educard;
    main.appendChild(card);
    
});
