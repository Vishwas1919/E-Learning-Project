//import data from "./data.js"
// const data=[
//     {
//         redtitle:'Popular',
//         image:"/ASSETS/image1.jpeg",
//         type:'Unconscious Bias',
//         duration:'Duration : 25Mins',
//         fee:'$15.90',
//         feetype:'*Free',
//         institute:'/ASSETS/cloud.png',
//         rating:'<i class="fa-sharp fa-solid fa-star"></i>(43,435)'

//     },
//     {
//         redtitle:'Best Seller',
//         image:"/ASSETS/image2.jpeg",
//         type:'Communication ',
//         duration:'Duration : 50Mins',
//         fee:'$15.90',
//         feetype:'*Free',
//         institute:'/ASSETS/khan.png',
//         rating:'<i class="fa-sharp fa-solid fa-star"></i>(30,435)'

//     },
//     {
//         redtitle:'Best Seller',
//         image:"/ASSETS/image3.jpeg",
//         type:'Communication ',
//         duration:'Duration : 1hour 12Mins',
//         fee:'$10.90',
//         feetype:'*Free',
//         institute:'/ASSETS/khan.png',
//         rating:'<i class="fa-sharp fa-solid fa-star"></i>(28,435)'

//     }
// ]
data.forEach((element,i) => {

    const main=document.querySelector(".main");

    const card=document.createElement("span");
    card.classList='card';
    const Educard=`
    <p>${data[i].redtitle}</p>
    <h4>${data[i].title}</h4>

    
    
    
    `
    card.innerHTML+=Educard;
   // main.appendChild(card);
   main.appendChild(card)
    
});

//alert("hi")
console.log("helo")


