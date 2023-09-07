let openShopping = document.querySelector('.store');
let closeShopping = document.querySelector(".closeShopping");
let storelist = document.querySelector(".storelist");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector( ".total");
let quantities = document.querySelector (".quantities");

openShopping.addEventListener("click" , ()=>{
    body.classList.add("active");
})
closeShopping.addEventListener("click" , ()=>{
    body.classList.remove("active");
})

let products = [
    {
        id:1,
        name:'PRODUCT NAME',
        image:'journals/8.webp',
        price:120000
    },
    {
        id:2,
        name:'PRODUCT NAME',
        image:'journals/9.webp',
        price:125000
    },
    {
        id:3,
        name:'PRODUCT NAME',
        image:'journals/5.webp',
        price:130000
    },
    {
        id:4,
        name:'PRO',
        image:'journals/4.webp',
        price:135000
    },
    {
        id:5,
        name:'PRODUCT NAME',
        image:'journals/5.webp',
        price:140000
    },
    {
        id:6,
        name:'PRODUCT NAME',
        image:'journals/6.webp',
        price:145000
    },
    {
        id:7,
        name:'PRODUCT NAME',
        image:'journals/12.webp',
        price:11000
    },
    {
        id:8,
        name:'PRODUCT NAME',
        image:'journals/8.webp',
        price:11000
    },
    {
        id:9,
        name:'PRODUCT NAME',
        image:'journals/9.webp',
        price:11000
    },
    {
        id:10,
        name:'PRODUCT NAME',
        image:'journals/10.webp',
        price:11000
    },
    {
        id:11,
        name:'PRODUCT NAME',
        image:'journals/11.webp',
        price:11000
    },
    {
        id:12,
        name:'PRODUCT NAME',
        image:'journals/12.webp',
        price:11000
    },
    
]
let listCards= [];
function iniApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}"/> <!-- Remove "image/" from here -->
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>

            <div class="button-1" id="button-2">
            <div id="slide"></div>
            <a href="#">Add to Card</a>
          </div>
          <a class="download-link" href="${value.pdf}" download="filename.pdf">
          Download File
          </a>
        `;
        storelist.appendChild(newDiv);
    })
}

iniApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantities= 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML='';
    let count= 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice =totalPrice + value.price;
        count=count + value.quantities;
        
        if(value != null){
            let newDiv= document.createElement('li');
            newDiv.innerHTML=`
            <div><img src="${value.image}"/> <!-- Remove "image/" from here --></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
         
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantities - 1})">-</button> 
            <div class="count">${value.quantities}</div>
            <button onclick="changeQuantity(${key}, ${value.quantities + 1})">+</button>
            </div>

            `
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantities.innerText=count;
}
function changeQuantity(key, quantities){
    if(quantities == 0){
        delete listCards[key];
    }else{
        listCards[key].quantities =quantities;
        listCards[key].price=quantities * products[key].price
    }
    reloadCard(); 
}




