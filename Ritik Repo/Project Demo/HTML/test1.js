const data=[
    {
        redtitle:'Popular',
        image:"../ASSETS/learntocode.avif",
        type:'Learn Code from Basic',
        duration:'Duration : 25Mins',
        fee:'$15.90',
        feetype:'*Free',
        institute:'../ASSETS/cloud.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (43,435)',
        button:'Enroll Now'

    },
    {
        redtitle:'Best Seller',
        image:"../ASSETS/programing.jpg",
        type:'Learn Programing ',
        duration:'Duration : 50Mins',
        fee:'$15.90',
        feetype:'',
        institute:'../ASSETS/coursera.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (30,435)',
        button:'Buy Now'

    },
    {
        redtitle:'Best Seller',
        image:"../ASSETS/image3.jpeg",
        type:'Critical Thinking',
        duration:'Duration : 1hour 12Mins',
        fee:'$10.90',
        feetype:'',
        institute:'../ASSETS/khan.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i>(28,435)',
        button:'Buy Now'

    },
    {
        redtitle:'Best Seller',
        image:"../ASSETS/image3.jpeg",
        type:'Communication',
        duration:'Duration : 1hour 12Mins',
        fee:'$10.90',
        feetype:'',
        institute:'../ASSETS/khan.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i>(28,435)',
        button:'Buy Now'

    }    
    
]
const data2=[
    {
        redtitle:'Popular',
        image:"/ASSETS/image4.jpeg",
        type:'Learn Code from Basic',
        duration:'Duration : 25Mins',
        fee:'$15.90',
        feetype:'*Free',
        institute:'/ASSETS/cloud.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (43,435)',
        button:'Enroll Now'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image5.jpeg",
        type:'Learn Programing ',
        duration:'Duration : 50Mins',
        fee:'$15.90',
        feetype:'',
        institute:'/ASSETS/coursera.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (30,435)',
        button:'Buy Now'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image1.jpeg",
        type:'Critical Thinking',
        duration:'Duration : 1hour 12Mins',
        fee:'$10.90',
        feetype:'',
        institute:'/ASSETS/khan.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i>(28,435)',
        button:'Buy Now'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image6.jpeg",
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
   // const main2=document.querySelector(".main2");

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
   // main2.appendChild(card);   
});
data2.forEach((element,i) => {

   const main2=document.querySelector(".main2");
    const card2=document.createElement("div");
    card2.classList='card';
    const Educard2=`
    <span class="info2">
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
    card2.innerHTML+= Educard2;
   main2.appendChild(card2);   
});

