const data=[
    {
        redtitle:'Popular',
        image:"/ASSETS/learntocode.avif",
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
        image:"/ASSETS/programing.jpg",
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
        image:"/ASSETS/image3.jpeg",
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
const data2=[
    {
        redtitle1:'Popular',
        image1:"/ASSETS/image4.jpeg",
        type1:'Learn Code from Basic',
        duration1:'Duration : 25Mins',
        fee1:'$15.90',
        feetype1:'*Free',
        institute1:'/ASSETS/cloud.png',
        rating1:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (43,435)',
        button1:'Enroll Now'
    },
    {
        redtitle1:'Best Seller',
        image1:"/ASSETS/image5.jpeg",
        type1:'Learn Programing ',
        duration1:'Duration : 50Mins',
        fee1:'$15.90',
        feetype1:'',
        institute1:'/ASSETS/coursera.png',
        rating1:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> (30,435)',
        button1:'Buy Now'
    },
    {
        redtitle1:'Best Seller',
        image1:"/ASSETS/image1.jpeg",
        type1:'Critical Thinking',
        duration1:'Duration : 1hour 12Mins',
        fee1:'$10.90',
        feetype1:'',
        institute1:'/ASSETS/khan.png',
        rating1:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i>(28,435)',
        button1:'Buy Now'
    },
    {
        redtitle1:'Best Seller',
        image1:"/ASSETS/image6.jpeg",
        type1:'Communication',
        duration1:'Duration : 1hour 12Mins',
        fee1:'$10.90',
        feetype1:'',
        institute1:'/ASSETS/khan.png',
        rating1:'<i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i> <i class="fa-sharp fa-solid fa-star"></i>(28,435)',
        button1:'Buy Now'
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
})
data2.forEach((element,i) => {

   const main2=document.querySelector(".main2");
    const card2=document.createElement("div");
    card2.classList='card2';
    const Educard2=`
    <span class="info2">
        <p class="para">${data2[i].redtitle1}</p>
    <img src="${data2[i].image1}">
    <h3>${data2[i].type1}1</h3>
    <h4>${data2[i].duration1}</h4>
    <span><strike>${data2[i].fee1}</strike></span>
    <span>${data2[i].feetype1}</span>
    <div  class="institute">
        <img  src="${data2[i].institute1}">
    </div>
    <span class="rating">${data2[i].rating1}</span> 
    </span>
    <button class="dynamic-button" onclick="doNow()">${data2[i].button1}</button> `
    card2.innerHTML+= Educard2;
   main2.appendChild(card2);   
});

