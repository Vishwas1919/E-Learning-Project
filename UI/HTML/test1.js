console.log("Hii");
const data=[
    {
        redtitle:'Popular',
        image:"/ASSETS/image1.jpeg",
        type:'Unconscious Bias',
        duration:'Duration : 25Mins',
        fee:'$15.90',
        feetype:'*Free',
        institute:'/ASSETS/cloud.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i>(43,435)'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image2.jpeg",
        type:'Communication ',
        duration:'Duration : 50Mins',
        fee:'$15.90',
        feetype:'*Free',
        institute:'/ASSETS/khan.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i>(30,435)'

    },
    {
        redtitle:'Best Seller',
        image:"/ASSETS/image3.jpeg",
        type:'Communication ',
        duration:'Duration : 1hour 12Mins',
        fee:'$10.90',
        feetype:'*Free',
        institute:'/ASSETS/khan.png',
        rating:'<i class="fa-sharp fa-solid fa-star"></i>(28,435)'

    }
]
data.forEach((element,i) => {
    const main=document.querySelector(".main");
        console.log(main);
        const card=document.createElement("span");
        card.classList='card';
        const Educard=`
        
        <img src="${data[i].image}" alt="" width="150px" height="140px">
        <span class="info">
            <h4 class="title">${data[i].redtitletitle}</h4>
            <span>${data[i].type}</span>
            
        
        `

        card.innerHTML+=Educard;
        main.appendChild(card);

});
// data.forEach((element,i) => {

//     const main=document.querySelector(".main");

//     const card=document.createElement("span");
//     card.classList='card';
//     const Educard=`
//     <p>${data[i].redtitle}</p>
//     <h4>${data[i].type}</h4>

    
    
    
//     `
//     card.innerHTML+=Educard;
//    // main.appendChild(card);
//    main.appendChild(card)
    

